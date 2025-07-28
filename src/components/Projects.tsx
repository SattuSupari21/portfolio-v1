"use client";

import { ArrowRight, Github } from "lucide-react";
import { Card } from "./ui/card";
import { IconButton } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

import { projects } from "@/constants";

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
    <Card
      className="group p-2 cursor-pointer hover:bg-accent transition"
      onClick={() => router.push(`/project/${project.slug}`)}
    >
      <div className="flex-1 flex flex-col justify-between p-1 gap-4">
        <div className="space-y-2">
          <p className="font-bold">{project.title}</p>
          <p className="opacity-80 text-sm">{project.shortAbout}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <Badge
                key={project.id}
                className="border-zinc-600"
                variant={"secondary"}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <IconButton
            variant={"outline"}
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.sourceCode} target="_blank">
              <Github className="mr-2" /> Source Code
            </a>
          </IconButton>
          <ArrowRight className="-rotate-45 group-hover:-rotate-0 transition-transform" />
        </div>
      </div>
    </Card>
  );
};

export const Projects = () => {
  return (
    <div>
      <span className="flex items-center gap-2 text-xl font-medium">
        Projects
      </span>
      <div className="flex flex-col mt-6 gap-4">
        {projects.map((project) => {
          return <RenderProject key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};
