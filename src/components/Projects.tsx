import { ArrowRight } from "lucide-react"
import { Card } from "./ui/card"

export const Projects = () => {
    return (
        <div>
            <span className="flex items-center gap-2 text-2xl font-medium">Projects<ArrowRight /></span>
            <div className="mt-6 flex flex-col gap-6">
                <div className="w-full h-80 border rounded-lg flex gap-6 p-4">
                    <div className="w-full h-full border flex-1">
                        <img src="./limktree-home.png" alt="limktree homepage" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">Limktree</div>
                </div>
            </div>
        </div>
    )
}
