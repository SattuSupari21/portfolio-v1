import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
    return (
        <main className="flex bg-[#0e0e0e] flex-col items-center mb-6">
            <div className="w-full min-h-full flex flex-col gap-10 p-2 max-w-[720px]">
                <Header />
                <About />
                <Skills />
                <Projects />
            </div>
        </main>
    );
}
