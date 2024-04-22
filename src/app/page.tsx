import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";

export default function Home() {
    return (
        <main className="flex bg-[#0e0e0e] flex-col items-center mb-6">
            <div className="w-full min-h-full flex flex-col p-2 max-[720px]:p-4 gap-12 max-[480px]:p-4 max-w-[720px]">
                <Header />
                <About />
                <Education />
                <Skills />
                <Projects />
            </div>
        </main>
    );
}
