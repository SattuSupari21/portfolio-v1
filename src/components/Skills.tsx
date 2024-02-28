"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { BackgroundGradient } from "./ui/background-gradient"

export const Skills = () => {
    return (
        <div className="w-full space-y-4 mt-6">
            <span className="flex gap-2 items-center text-2xl font-medium">Skills<ArrowRight /></span>
            {/*
            <div className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <Card className="flex flex-col gap-2 p-4">
                    <span className="text-xl font-medium">Languages</span>
                    <span>Python, C/C++, SQL (Postgres, MySQL), JavaScript, Typescript, HTML/CSS</span>
                </Card>
            </div>
            <div className="w-full rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1">
                <Card className="flex flex-col gap-2 p-4">
                    <span className="text-xl font-medium">Tools & Technologies</span>
                    <span>React, Next.js, Node.js, Elysia.js, Hono, Express, Flask, Tailwind CSS, shadcn/ui, FastAPI</span>
                </Card>
            </div>
            <div className="w-full rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-1">
                <Card className="flex flex-col gap-2 p-4">
                    <span className="text-xl font-medium">Developer Tools</span>
                    <span>Git, Docker, VS Code, PyCharm, WebStorm, Neovim, Postman, Jupyter</span>
                </Card>
            </div>
*/}
            <Card className="flex flex-col gap-2 p-4">
                <span className="text-lg font-semibold">Languages</span>
                <span className="text-sm font-medium">Python, C/C++, SQL (Postgres, MySQL), NoSQL (MongoDB), JavaScript, Typescript, HTML/CSS</span>
            </Card>
            <Card className="flex flex-col gap-2 p-4">
                <span className="text-lg font-semibold">Tools & Technologies</span>
                <span className="text-sm font-medium">React, Next.js, Node.js, Elysia.js, Hono, Express, Flask, RESTful API, GraphQL, Tailwind CSS, shadcn/ui, FastAPI</span>
            </Card>
            <Card className="flex flex-col gap-2 p-4">
                <span className="text-lg font-semibold">Developer Tools</span>
                <span className="text-sm font-medium">Git, Docker, VS Code, PyCharm, WebStorm, Neovim, Postman, Jupyter</span>
            </Card>


            {/*<BackgroundGradient className="rounded-[22px] w-full sm:p-10 bg-white dark:bg-zinc-900 flex flex-col gap-2">
                <span className="text-lg font-semibold">Developer Tools</span>
                <span className="text-sm font-medium">Git, Docker, VS Code, PyCharm, WebStorm, Neovim, Postman, Jupyter</span>
            </BackgroundGradient>*/}

        </div>
    )
}
