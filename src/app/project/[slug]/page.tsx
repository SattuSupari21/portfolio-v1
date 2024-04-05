"use client"

import { Header } from "@/components/Header";
import { IconButton } from "@/components/ui/button";
import { projects } from "@/constants"
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";

function ProjectDetails({ slug }: { slug: string }) {
    const router = useRouter();
    const project = projects.find((p) => p.slug == slug)
    if (!project) {
        router.push('/')
        return
    }
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex items-center justify-between">
                <span className="text-3xl font-semibold"><span className="text-blue-200">#{project.id}. </span>{project?.title}</span>
                <IconButton className="ml-auto hover:bg-white hover:text-black" variant={'outline'} asChild onClick={(e) => e.stopPropagation()}>
                    <a href={project.sourceCode} target="_blank"><Github className="mr-2" /> Source Code </a>
                </IconButton>
            </div>
            <div className="w-full h-full border">
                <video autoPlay controls>
                    <source src="https://res.cloudinary.com/dpnmetc7y/video/upload/v1712301346/vmdt6cxi9ju4skuknr5y.mov" />
                </video>
            </div>
            <div className="w-full">
                <p className="text-xl font-semibold text-blue-200">About</p>
                <p className="text-lg">{project.about}</p>
            </div>
            <div className="w-full">
                <p className="text-xl font-semibold text-blue-200">Technology used</p>
                <ul className="list-disc list-inside">
                    {project.techStack.map((tech, index) => <li key={index} className="text-lg">{tech}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default function Project({ params }: { params: { slug: string } }) {
    return (
        <>
            <main className="flex flex-col items-center mb-6">
                <div className="w-full min-h-full flex flex-col gap-10 p-2 max-w-[720px]">
                    <Header />
                    <ProjectDetails slug={params.slug} />
                </div>
            </main>
        </>
    )
}
