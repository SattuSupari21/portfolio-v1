"use client"

import { Header } from "@/components/Header";
import { projects } from "@/constants"
import { useRouter } from "next/navigation";

function ProjectDetails({ id }: { id: number }) {
    const router = useRouter();
    const project = projects.find((p) => p.id == id)
    if (!project) {
        router.push('/')
        return
    }
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <span className="text-3xl font-semibold"><span className="text-blue-200">#{project.id}. </span>{project?.title}</span>
            <div className="w-full h-full border">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
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

export default function Project({ params }: { params: { slug: number } }) {
    return (
        <>
            <main className="flex flex-col items-center mb-6">
                <div className="w-full min-h-full flex flex-col gap-10 p-2 max-w-[720px]">
                    <Header />
                    <ProjectDetails id={params.slug} />
                </div>
            </main>
        </>
    )
}
