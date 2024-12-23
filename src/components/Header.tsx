"use client";

import { Mail, SendHorizontal } from "lucide-react";
import { IconButton } from "./ui/button";
import { Button } from "./ui/moving-border";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { SendMail } from "@/actions";
import toast from "react-hot-toast";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { resumeLink } from "@/constants";

const ContactDialog = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name && email && message) {
      toast.promise(SendMail({ name, email, message }), {
        loading: "Sending mail...",
        success: <b>Mail sent!</b>,
        error: <b>Could not send mail.</b>,
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          borderRadius="0.5rem"
          className="bg-white dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Hire Me!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-[540px]:h-screen">
        <form
          onSubmit={(event) => onSubmit(event)}
          className="grid max-[480px]:mt-auto max-[480px]:mb-auto w-full max-w-sm items-center gap-6 py-2"
        >
          <DialogHeader>
            <DialogTitle className="flex gap-2">
              <Mail className="w-4 h-4" />
              Send an Email
            </DialogTitle>
          </DialogHeader>
          <div className="grid w-full max-w-sm items-center gap-6 py-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <DialogClose asChild>
              <IconButton type="button" variant="secondary">
                Close
              </IconButton>
            </DialogClose>
            <IconButton type="submit">
              Send Mail
              <SendHorizontal className="w-4 h-4 ml-1" />
            </IconButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const Header = () => {
  const pathName = usePathname();

  return (
    <div className="w-full h-full flex items-center justify-between font-medium">
      <div>
        <a href="/" className="underline">
          satvik
        </a>
      </div>

      <div className="flex gap-4">
        <div className="max-[480px]:invisible flex gap-6 items-center ">
          <a
            href={"/about"}
            className={pathName === "/about" ? "text-primary" : ""}
          >
            About
          </a>
          <a
            href={"/projects"}
            className={pathName === "/projects" ? "text-primary" : ""}
          >
            Projects
          </a>
          <a href={resumeLink} target="_blank">
            Resume
          </a>
        </div>

        <div className="flex items-center min-[480px]:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href={"/about"}>About</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={"/projects"}>Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={resumeLink}>Resume</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
