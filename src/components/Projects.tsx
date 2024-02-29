import { ArrowRight, Github } from "lucide-react"
import { Card } from "./ui/card"
import { IconButton } from "./ui/button"
import { Button } from "./ui/moving-border"

export const Projects = () => {
    return (
        <div>
            <span className="flex items-center gap-2 text-2xl font-medium">Projects<ArrowRight /></span>
            <div className="mt-6 space-y-4">

                <Card className="h-80 flex gap-4 p-2">
                    <div className="w-full h-full border flex-1">
                        <img src="./limktree-home.png" alt="limktree homepage" className="w-full h-full object-fill" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Limktree</p>
                            <p>Provides users with a centralized platform to share multiple links through a single customizable
                                URL, similar to the popular Linktree service</p>
                        </div>
                        <IconButton className="ml-auto" variant={'outline'}><Github className="mr-2" /> Source Code</IconButton>

                    </div>
                </Card>

                <Card className="h-80 flex gap-4 p-2">
                    <div className="w-full h-full border flex-1">
                        <img src="./shorty-home.png" alt="shorty homepage" className="w-full h-full object-fill" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Shorty</p>
                            <p>A simple to use URL shortner created using Elysia.js with Bun runtime and Next.js.</p>
                        </div>
                        <IconButton className="ml-auto" variant={'outline'}><Github className="mr-2" /> Source Code</IconButton>

                    </div>
                </Card>

            </div>
        </div>
    )
}
