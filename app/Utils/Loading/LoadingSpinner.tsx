import { Loader } from "lucide-react";
import { LoadingSpinnerProps } from "../Types/Type";

const SPINNER_SIZES = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
} as const;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "불러오는중..",
  size = "md",
  color = "text-blue-500",
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <Loader className={`${SPINNER_SIZES[size]} animate-spin ${color}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 bg-white rounded-full" />
        </div>
      </div>
      <p className="text-gray-600 text-lg font-medium">{text}</p>
    </div>
  );
};
