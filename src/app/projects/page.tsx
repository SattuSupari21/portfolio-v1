"use client";

import { ArrowRight, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/constants";

type ProjectType = {
  id: number;
  slug: string;
  image: string;
  title: string;
  about: string;
  sourceCode: string;
  techStack: string[];
  demoVideoUrl: string | null;
};

const RenderProject = ({ project }: { project: ProjectType }) => {
  const router = useRouter();
  return (
    <Card
      className="group h-auto flex flex-col gap-4 p-2 hover:bg-accent cursor-pointer"
      onClick={() => router.push(`/project/${project.slug}`)}
    >
      <div className="w-full h-[240px] border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xl font-bold">{project.title}</p>
          <p>{project.about}</p>
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
              <Github className="mr-2" /> Source Code{" "}
            </a>
          </IconButton>
          <ArrowRight className="-rotate-45 group-hover:-rotate-0 transition-transform" />
        </div>
      </div>
    </Card>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="w-full min-h-full flex flex-col p-2 max-[720px]:p-4 gap-10 max-[480px]:p-4 max-w-[720px] mb-6">
        <Header />
        <div className="space-y-2">
          <p className="text-4xl">Projects</p>
          <p className="opacity-80">
            Here are some of the projects I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-6">
          {projects.map((project) => {
            return <RenderProject key={project.id} project={project} />;
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
