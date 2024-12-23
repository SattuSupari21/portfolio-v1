export const Education = () => {
  return (
    <div className="w-full space-y-4">
      <span className="flex items-center gap-2 text-xl font-medium mb-6">
        Education
      </span>
      <div className="flex items-center gap-2 opacity-80">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Graphic Era (Deemed to be University)
            </span>
            <span className="font-medium max-[480px]:hidden">2022 - 2024</span>
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
      </div>
      <div className="flex items-center gap-2 opacity-80">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Graphic Era (Deemed to be University)
            </span>
            <span className="font-medium max-[480px]:hidden">2019 - 2022</span>
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
      </div>
    </div>
  );
};
