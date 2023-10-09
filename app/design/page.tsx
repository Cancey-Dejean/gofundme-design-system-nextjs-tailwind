import Image from "next/image"
import Link from "next/link"

const designSystemItems = [
  {
    name: "Typography",
    href: "/design/typography",
  },
  {
    name: "Colors",
    href: "/design/colors",
  },
  {
    name: "Components",
    href: "http://localhost:6006",
  },
]

export default function DesignHome() {
  return (
    <main className="flex-1 flex items-center flex-col justify-center gap-10">
      <h1>Design System</h1>

      <div className="flex gap-4 container">
        {designSystemItems.map((item) => (
          <div
            key={item.name}
            className="flex-1 flex items center justify-center"
          >
            <Link href={item.href}>{item.name}</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
