import { ArrowRight, Github } from "lucide-react"
import { Card } from "./ui/card"
import { IconButton } from "./ui/button"
import { Badge } from "@/components/ui/badge"

type ProjectType = {
    id: number,
    image: string,
    title: string,
    about: string,
    sourceCode: string,
    techStack: string[]
}

const RenderProject = ({ project }: { project: ProjectType }) => {
    return (
        <Card className="h-auto flex flex-col gap-4 p-2">
            <div className="w-full h-[240px] border">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                    <p className="text-xl font-bold">{project.title}</p>
                    <p>{project.about}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map(tech => <Badge className="border-zinc-600" variant={'secondary'}>{tech}</Badge>
                        )}
                    </div>

                </div>
                <IconButton className="ml-auto" variant={'outline'}><Github className="mr-2" /> Source Code</IconButton>
            </div>
        </Card>
    )
}

const projects = [
    {
        id: 1,
        image: "limktree-home.png",
        title: "Limktree",
        about: "Provides users with a centralized platform to share multiple links through a single customizable URL, similar to the popular Linktree service.",
        sourceCode: "",
        techStack: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "Axios", "JWT", "Recoil", "ZOD", "Next UI", "Typescript"]
    },
    {
        id: 2,
        image: "shorty-home.png",
        title: "Shorty",
        about: "A simple to use URL shortner created using Elysia.js with Bun runtime and Next.js.",
        sourceCode: "",
        techStack: ["Elysia.js", "Next.js", "Prisma", "PostgreSQL", "Axios", "Recoil", "Radix UI", "Typescript"]
    },
    {
        id: 3,
        image: "styled-home.png",
        title: "Styled",
        about: "Full-stack e-commerce web application created using Strapi CMS and Next.js.",
        sourceCode: "",
        techStack: ["Strapi CMS", "Sqlite", "Next.js", "GraphQL", "Stripe", "Auth0", "Framer Motion", "Javascript"]
    }
];

export const Projects = () => {
    return (
        <div>
            <span className="flex items-center gap-2 text-2xl font-medium">Projects<ArrowRight /></span>
            <div className="mt-6 grid grid-cols-2 gap-4">
                {
                    projects.map(project => {
                        return <RenderProject project={project} />
                    })
                }
            </div>
        </div>
    )
}
