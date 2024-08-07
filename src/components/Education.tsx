import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export const Education = () => {
  return (
    <div className="w-full space-y-4">
      <span className="flex items-center gap-2 text-xl font-medium">
        Education
        <ArrowRight />
      </span>
      <Card className="flex items-center gap-4 p-4">
        <img
          src="/images/college-logo.png"
          alt="college logo"
          className="w-16 h-16"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-md font-semibold">
              Graphic Era (Deemed to be University)
            </span>
            <span className="text-md font-medium max-[480px]:hidden">
              2022 - 2024
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Master of Computer Applications
            </span>
            <span className="text-sm font-medium max-[480px]:hidden">
              CGPA - 8.55
            </span>
          </div>
          <span className="text-sm font-medium min-[480px]:hidden">
            CGPA - 8.55
          </span>
        </div>
      </Card>
      <Card className="flex items-center gap-4 p-4">
        <img
          src="/images/college-logo.png"
          alt="college logo"
          className="w-16 h-16"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-md font-semibold">
              Graphic Era (Deemed to be University)
            </span>
            <span className="text-md font-medium max-[480px]:hidden">
              2019 - 2022
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Bachelor of Computer Applications
            </span>
            <span className="text-sm font-medium max-[480px]:hidden">
              CGPA - 8.61
            </span>
          </div>
          <span className="text-sm font-medium min-[480px]:hidden">
            CGPA - 8.61
          </span>
        </div>
      </Card>
    </div>
  );
};
