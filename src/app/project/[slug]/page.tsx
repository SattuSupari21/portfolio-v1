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
        <div className="w-full h-full flex flex-col gap-4 items-center">
            <span className="text-4xl font-semibold">{project?.title}</span>
            <div className="w-full h-full border rounded-xl p-2 hover:border-sky-400 transition">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
            </div>
            <span className="text-lg text-center">{project.about}</span>
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
