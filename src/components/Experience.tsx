import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";

import { WORK_EXPERIENCE } from "@/constants"

export const Experience = () => {
  return  (
    <div className="w-full space-y-4">
      <span className="flex items-center gap-2 text-xl font-medium mb-6">
        Experience
      </span>
      <WorkExperience experiences={WORK_EXPERIENCE} />
    </div>
  )
}
