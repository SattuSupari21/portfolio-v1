import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import {Experience} from "@/components/Experience"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full min-h-full flex flex-col p-2 max-[720px]:p-4 gap-14 max-[480px]:p-4 max-w-[720px] mb-6">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
      <Footer />
    </main>
  );
}
