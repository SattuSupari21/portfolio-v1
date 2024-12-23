import { IconButton } from "./ui/button";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaDiscord, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  DiscordUrl,
  GithubUrl,
  LinkedInUrl,
  TwitterUrl,
  profilePicture,
  resumeLink,
} from "@/constants";

export default function Links() {
  return (
    <div className="flex gap-2 items-center">
      {/* <div className="space-x-2">
        <IconButton variant={"outline"} asChild className="max-[480px]:hidden">
          <a href={"/Satvik_s_Resume.pdf"} target="_blank">
            Resume
          </a>
        </IconButton>
      </div> */}
      <IconButton variant={"outline"} size={"icon"} asChild>
        <a href="mailto:satvikchandra100@gmail.com">
          <IoMailOutline className="w-4 h-4" />
        </a>
      </IconButton>
      <IconButton variant={"outline"} size={"icon"} asChild>
        <a href={GithubUrl} target="_blank">
          <FiGithub className="w-4 h-4" />
        </a>
      </IconButton>
      <IconButton variant={"outline"} size={"icon"} asChild>
        <a href={LinkedInUrl} target="_blank">
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </IconButton>
      <IconButton variant={"outline"} size={"icon"} asChild>
        <a href={TwitterUrl} target="_blank">
          <FaXTwitter className="w-4 h-4" />
        </a>
      </IconButton>
      <IconButton variant={"outline"} size={"icon"} asChild>
        <a href={DiscordUrl} target="_blank">
          <FaDiscord className="w-4 h-4" />
        </a>
      </IconButton>
    </div>
  );
}
