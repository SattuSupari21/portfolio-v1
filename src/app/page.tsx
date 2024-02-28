import { About } from "@/components/About";
import { Header } from "../components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
    return (
        <main className="flex w-screen min-h-screen bg-[#0e0e0e] flex-col items-center p-2 mb-6">
            <div className="w-full h-full flex flex-col gap-10  max-w-[700px]">
                <Header />
                <About />
                <Skills />
                <Projects />
            </div>
        </main>
    );
}
