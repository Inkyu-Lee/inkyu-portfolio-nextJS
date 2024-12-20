import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import React from "react";
import { ErrorComponentsProps } from "../Types/Type";

const SPINNER_SIZES = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
} as const;

const ErrorException: React.FC<ErrorComponentsProps> = ({ error, reset }) => {
  const errorTitle = error.title || "문제가 발생한 것 같습니다.";
  const errorMessage = error.message || "알 수 없는 오류가 발생했습니다.";
  const statusCode = error.statusCode;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorTitle}</AlertTitle>
            <AlertDescription className="mt-2">
              {errorMessage}
              {statusCode && (
                <span className="block mt-1 text-sm">
                  Status Code: {statusCode}
                </span>
              )}
            </AlertDescription>
          </Alert>

          <button
            onClick={() => reset()}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            type="button"
          >
            다시 시도
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorException;
