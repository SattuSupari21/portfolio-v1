"use client";

import { ArrowRight, Github } from "lucide-react";
import { Card } from "./ui/card";
import { IconButton } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

import { top_projects } from "@/constants";

type ProjectType = {
  id: number;
  slug: string;
  image: string;
  title: string;
  shortAbout?: string;
  about: string;
  sourceCode: string;
  techStack: string[];
  demoVideoUrl: string | null;
};

const RenderProject = ({ project }: { project: ProjectType }) => {
  const router = useRouter();
  return (
    <div
      className="group relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-secondary/20 hover:before:content-['']"
      onClick={() => router.push(`/project/${project.slug}`)}
    >
      <div className="w-full flex-1 flex flex-row items-center justify-between">
        <div className="space-y-2">
          <p className="font-bold">{project.title}</p>
          <p className="opacity-80 text-sm">{project.shortAbout}</p>
          {/* <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <Badge
                key={project.id}
                className="border-zinc-600"
                variant={"secondary"}
              >
                {tech}
              </Badge>
            ))}
          </div> */}
        </div>
        <ArrowRight className="-rotate-45 group-hover:-rotate-0 transition-transform text-sm" />
        {/* <div className="flex items-center justify-between">
          <IconButton
            variant={"outline"}
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.sourceCode} target="_blank">
              <Github className="mr-2" /> Source Code
            </a>
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div>
      <span className="flex items-center gap-2 text-xl font-medium">
        Projects
      </span>
      <div className="flex flex-col mt-6 gap-6">
        {top_projects.map((project) => {
          return <RenderProject key={project.id} project={project} />;
        })}
      </div>
      <div className="w-full text-center mt-4">
        <a href={"/projects"}>
          <span className="opacity-70 hover:opacity-100 transition text-lgcenter">see all projects...</span>
        </a>
      </div>
    </div>
  );
};
