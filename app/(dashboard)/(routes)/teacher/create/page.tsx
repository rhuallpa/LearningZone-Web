"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";




const formSchema = z.object({
  title: z.string().min(1, {
    message: "El titulo es requerido",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Course created");
    } catch {
      toast.error("Algo salio mal, intente de nuevo");
    }
  }



  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">
          Nombra tu curso
        </h1>
        <p className="text-sm text-slate-500">
          ¿Como te gustaria llamar a tu curso?, No te preocupes puedes cambiar esto mas tarde.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Titulo del Curso
                  </FormLabel>
                  <FormControl>
                  <Input
                    className="text-white bg-gray-800" // Texto blanco y fondo gris oscuro para mejor contraste
                    disabled={isSubmitting}
                    placeholder="Ejemplo: 'Base de datos 1C24'"
                    {...field}
                  />
                  
                  </FormControl>
                  <FormDescription>
                    ¿Que enseñaras en este Curso?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button
                  type="button"
                  variant="ghost"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Continuar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   );
   
}
 
export default CreatePage;