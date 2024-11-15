import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface DataCardProps {
  value: number;
  label: string;
  shouldFormat?: boolean;
}

export const DataCard = ({
  value,
  label,
  shouldFormat,
}: DataCardProps) => {
  return (
   <Card className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
      <CardTitle className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        {label}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-purple-200">
        {shouldFormat ? formatPrice(value) : value}
      </div>
    </CardContent>
   </Card>
  )
}
