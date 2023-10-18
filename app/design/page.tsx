import Image from "next/image";
import Link from "next/link";

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
];

export default function DesignHome() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10">
      <h1>Design System</h1>

      <div className="container flex gap-4">
        {designSystemItems.map(({ name, href }) => (
          <div key={name} className="items center flex flex-1 justify-center">
            <Link href={href}>{name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
