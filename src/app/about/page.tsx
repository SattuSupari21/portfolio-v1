import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { FaDiscord, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import {
  DiscordUrl,
  GithubUrl,
  LinkedInUrl,
  resumeLink,
  TwitterUrl,
} from "@/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="w-full min-h-full flex flex-col p-2 max-[720px]:p-4 gap-12 max-[480px]:p-4 max-w-[720px] mb-auto">
        <Header />
        <div className="space-y-10">
          <p className="text-4xl">About Me</p>
          <div className="grid grid-cols-3 max-[480px]:grid-cols-2 text-lg gap-2">
            <p className="opacity-80">whoami</p>
            <div className="col-span-2 space-y-4">
              <p>
                Hi, I'm Satvik Chandra, from Dehradun, Uttarakhand. I have been
                coding for around 2 years. I specialize in full-stack web
                development.
              </p>
              <p>
                When I'm not at my desk, I am probably playing video games,
                lifting weights, or listening to music.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 max-[480px]:grid-cols-2 text-lg gap-2">
            <p className="opacity-80">connect</p>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <IconButton
                variant={"outline"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href="mailto:satvikchandra100@gmail.com">
                  <div className="flex gap-2 items-center">
                    <IoMailOutline className="w-5 h-5" />
                    <p>Mail</p>
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
              <IconButton
                variant={"outline"}
                size={"icon"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href={GithubUrl} target="_blank">
                  <div className="flex gap-2 items-center">
                    <FiGithub className="w-4 h-4" />
                    <p>GitHub</p>
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
              <IconButton
                variant={"outline"}
                size={"icon"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href={LinkedInUrl} target="_blank">
                  <div className="flex gap-2 items-center">
                    <FaLinkedinIn className="w-4 h-4" />
                    LinkedIn
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
              <IconButton
                variant={"outline"}
                size={"icon"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href={TwitterUrl} target="_blank">
                  <div className="flex gap-2 items-center">
                    <FaXTwitter className="w-4 h-4" />
                    Twitter
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
              <IconButton
                variant={"outline"}
                size={"icon"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href={DiscordUrl} target="_blank">
                  <div className="flex gap-2 items-center">
                    <FaDiscord className="w-4 h-4" />
                    Discord
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
              <IconButton
                variant={"outline"}
                size={"icon"}
                className="w-full flex items-center justify-between p-2"
                asChild
              >
                <a href={resumeLink} target="_blank">
                  <div className="flex gap-2 items-center">
                    <IoDocumentTextOutline className="w-4 h-4" />
                    Resume
                  </div>
                  <ArrowRight />
                </a>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
