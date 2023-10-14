import { Button } from "@/components/atoms/Button/Button"
import Hero from "@/components/organisms/Hero"
import Steps from "@/components/organisms/Steps"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Steps />
    </main>
  )
}
