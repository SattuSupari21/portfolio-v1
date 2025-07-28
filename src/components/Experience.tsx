export const Experience = () => {
  return (
    <div className="w-full space-y-4">
      <span className="flex items-center gap-2 text-xl font-medium mb-6">
        Work Experience
      </span>

      <div className="flex items-center gap-2 opacity-80">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Indian Institute of Technology Bombay
            </span>
            <span className="font-medium max-[480px]:hidden">June 2025 - Present</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Intern Trainee
            </span>
            <span className="text-sm font-medium max-[480px]:hidden">
              Mumbai, India
            </span>
          </div>
          <span className="text-sm font-medium min-[480px]:hidden">
            Mumbai, India
          </span>
        </div>
      </div>
    </div>
  );
}
