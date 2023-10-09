import Image from "next/image"
import Link from "next/link"

const colorsData = [
  {
    name: "Primary",
    variants: {
      bgColor: "var(--color-primary)",
      hexCode: "#02a95c",
      rgb: "rgb(2, 169, 92)",
    },
  },
  // {
  //   bgColor: "var(--color-primary-hover)",
  //   hexCode: "#008748",
  //   rgb: "rgb(2, 169, 92)",
  // },
]

export default function DesignHome() {
  return (
    <main className="flex-1 flex flex-col  gap-10">
      <div className=" container mx-auto mt-10 min-h-[432px] justify-center flex flex-col bg-gradient-design rounded-[56px] px-14 text-white">
        <div className="container mx-auto px-5">
          <h1 className="text-4xl mb-4">Colors</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            magni.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5  flex flex-col gap-10">
        {colorsData.map((item, i) => (
          <div className="flex flex-col gap-10" key={i}>
            <h2>Primary</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col">
                <div
                  className="rounded-[16px] h-28"
                  style={{
                    backgroundColor: item.variants.bgColor,
                  }}
                />
                <div>
                  <p>{item.variants.hexCode}</p>
                  <p>{item.variants.rgb}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
