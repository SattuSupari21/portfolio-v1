"use client"

import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react"
import { IconButton } from "./ui/button"
import { Button } from "./ui/moving-border"
import { GithubUrl, LinkedInUrl, profilePicture } from "@/constants"

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
import { Textarea } from "@/components/ui/textarea"
import { FormEvent, useState } from "react"
import { SendMail } from "@/actions"
import toast from "react-hot-toast"

const ContactDialog = () => {

    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (name && email && message) {
            toast.promise(
                SendMail({ name, email, message }),
                {
                    loading: 'Sending mail...',
                    success: <b>Mail sent!</b>,
                    error: <b>Could not send mail.</b>,
                }
            );
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    borderRadius="0.5rem"
                    className="bg-white dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >Hire Me!</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-[540px]:h-screen">
                <form onSubmit={(event) => onSubmit(event)} className="grid max-[480px]:mt-auto max-[480px]:mb-auto w-full max-w-sm items-center gap-6 py-2">
                    <DialogHeader>
                        <DialogTitle className="flex gap-2"><Mail className="w-4 h-4" />Send an Email</DialogTitle>
                    </DialogHeader>
                    <div className="grid w-full max-w-sm items-center gap-6 py-2">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Your message</Label>
                            <Textarea placeholder="Type your message here." id="message" onChange={(e) => setMessage(e.target.value)} />
                        </div>
                    </div>
                    <DialogFooter>
                        <IconButton type="submit">Send Mail<SendHorizontal className="w-4 h-4 ml-2" /></IconButton>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export const Header = () => {
    return (
        <div className="w-full h-full flex items-center justify-between">
            <div className="min-[480px]:mt-4 flex gap-4 items-center justify-center">
                <img src={profilePicture} alt="profile picture" className="inline-block size-[60px] max-[480px]:size-[48px] rounded-full" />
                <div className="max-[480px]:invisible">
                    <div className="font-medium">Satvik Chandra</div>
                    <div className="text-zinc-400">Student</div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="space-x-2">
                    <ContactDialog />
                    <IconButton variant={'outline'} asChild className="max-[480px]:hidden">
                        <a href="https://drive.google.com/file/d/1XSMgp33XxLoHWVsO_HnroISQuhbjKzbk/view?usp=sharing" target="_blank">Resume</a>
                    </IconButton>
                </div>
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
