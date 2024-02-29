import { Github, Linkedin } from "lucide-react"
import { IconButton } from "./ui/button"
import { Button } from "./ui/moving-border"
import { GithubUrl, LinkedInUrl } from "@/constants"

export const Header = () => {
    return (
        <div className="w-full h-full flex items-center justify-between">
            <div className="py-4 flex gap-4 items-center justify-center">
                <img src="./pic.jpeg" alt="profile picture" className="w-14 h-14 object-cover rounded-full" />
                <div>
                    <div className="font-medium">Satvik Chandra</div>
                    <div className="text-zinc-400">Student</div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Button borderRadius="0.5rem"
                    className="bg-white dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800">Hire Me!</Button>
                <IconButton variant={'outline'} size={'icon'} asChild>
                    <a href={GithubUrl} target="_blank">
                        <Github />
                    </a>
                </IconButton>
                <IconButton variant={'outline'} size={'icon'} asChild>
                    <a href={LinkedInUrl} target="_blank">
                        <Linkedin />
                    </a>
                </IconButton>
            </div>
        </div>
    )
}
