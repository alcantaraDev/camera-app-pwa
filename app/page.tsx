import { Camera } from "@/components/camera";
import { Galery } from "@/components/galery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full px-4 pt-8">
        <span className="text-start text-4xl font-bold text-zinc-600">Galeria</span>
      </div>

      <Galery/>
      <Camera/>
    </main>
  )
}
