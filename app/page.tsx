import { AtomIcon } from "@/components/icons/atom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <AtomIcon className="fill-violet-500 pb-8" size={100}/>
      <h1 className="text-4xl font-medium">Hello World</h1>
      <span className="font-light">Bem vindo ao web template</span>
    </main>
  )
}
