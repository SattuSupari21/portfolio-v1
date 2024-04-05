"use client"

import { ArrowRight, Github } from "lucide-react"
import { Card } from "./ui/card"
import { IconButton } from "./ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

import { projects } from "@/constants"

type ProjectType = {
    id: number,
    slug: string,
    image: string,
    title: string,
    about: string,
    sourceCode: string,
    techStack: string[]
}

const RenderProject = ({ project }: { project: ProjectType }) => {
    const router = useRouter();
    return (
        <Card className="h-auto flex flex-col gap-4 p-2 hover:bg-zinc-800 hover:border-zinc-800 cursor-pointer" onClick={() => router.push(`/project/${project.slug}`)}>
            <div className="w-full h-[240px] border">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                    <p className="text-xl font-bold">{project.title}</p>
                    <p>{project.about}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map(tech => <Badge key={project.id} className="border-zinc-600" variant={'secondary'}>{tech}</Badge>
                        )}
                    </div>

                </div>
                <IconButton className="ml-auto hover:bg-white hover:text-black" variant={'outline'} asChild onClick={(e) => e.stopPropagation()}>
                    <a href={project.sourceCode} target="_blank"><Github className="mr-2" /> Source Code </a>
                </IconButton>
            </div>
        </Card>
    )
}

export const Projects = () => {
    return (
        <div>
            <span className="flex items-center gap-2 text-2xl font-medium">Projects<ArrowRight /></span>
            <div className="mt-6 grid max-[500px]:grid-cols-1 grid-cols-2 gap-4">
                {
                    projects.map(project => {
                        return <RenderProject key={project.id} project={project} />
                    })
                }
            </div>
        </div>
    )
}
