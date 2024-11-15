"use client";

import { useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/admin";
import { isTeacher } from "@/lib/teacher";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isAdminUser = isAdmin(userId);
  const isTeacherUser = isTeacher(userId);
  const isAdminPage = pathname?.startsWith("/admin1");
  const isAdminPage1 = pathname?.includes("/admin1");
  
  const handleAdminClick = () => {
    router.push("/admin1");
  };

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage || isAdminPage1 ? (
          <Link href="/">
            <Button
              size="sm"
              variant="ghost"
              className="bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] text-white hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] border border-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </Link>
        ) : isAdminUser || isTeacherUser ? (
          <Link href="/teacher/courses">
            <Button
              size="sm"
              variant="ghost"
              className="bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] text-white hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] border border-white"
            >
              Panel del Tutor
            </Button>
          </Link>
        ) : null}
        {isAdminUser && (
          <Button
            size="sm"
            variant="ghost"
            className="bg-gradient-to-r from-[#8A2BE2] via-[#3B82F6] to-[#8A2BE2] text-white hover:from-[#6B21A8] hover:via-[#2563EB] hover:to-[#6B21A8] border border-white"
            onClick={handleAdminClick}
          >
            Panel de Administración
          </Button>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
