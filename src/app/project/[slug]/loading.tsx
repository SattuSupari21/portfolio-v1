import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="w-full min-h-full flex flex-col p-2 max-[720px]:p-4 gap-12 max-[480px]:p-4 max-w-[720px] mb-6">
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <img src="/images/pepega-loading.webp" alt="loading" className="w-24" />
      </div>
      <Footer />
    </main>
  );
}
