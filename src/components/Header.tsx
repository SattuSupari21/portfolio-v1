"use client"

import { Github, Linkedin } from "lucide-react"
import { IconButton } from "./ui/button"
import { Button } from "./ui/moving-border"
import { GithubUrl, LinkedInUrl } from "@/constants"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ContactDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    borderRadius="0.5rem"
                    className="bg-white dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >Hire Me!</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <IconButton type="submit">Save changes</IconButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

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

                <ContactDialog />
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
