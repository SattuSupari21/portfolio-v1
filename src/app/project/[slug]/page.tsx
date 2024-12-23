"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/ui/button";
import { projects } from "@/constants";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";

function ProjectDetails({ slug }: { slug: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.slug == slug);
  if (!project) {
    router.push("/");
    return;
  }
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl font-semibold">
          <span className="text-primary">#{project.id}. </span>
          {project?.title}
        </span>
        <IconButton
          className="ml-auto hover:bg-white hover:text-black"
          variant={"outline"}
          asChild
          onClick={(e) => e.stopPropagation()}
        >
          <a href={project.sourceCode} target="_blank">
            <Github className="mr-2" /> Source Code{" "}
          </a>
        </IconButton>
      </div>
      <div className="w-full h-full border">
        {project.demoVideoUrl ? (
          <video autoPlay controls muted controlsList="nodownload" loop>
            <source src={project.demoVideoUrl} />
          </video>
        ) : (
          <img src={project.image} />
        )}
      </div>
      <div className="w-full">
        <p className="text-lg font-semibold text-primary">About</p>
        <p>{project.about}</p>
      </div>
      <div className="w-full">
        <p className="text-lg font-semibold text-primary">Technology used</p>
        <ul className="list-disc list-inside">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="w-full min-h-full flex flex-col max-[720px]:p-4 gap-12 max-[480px]:p-4 p-2 max-w-[720px] mb-6">
          <Header />
          <ProjectDetails slug={params.slug} />
        </div>
        <Footer />
      </main>
    </>
  );
}
