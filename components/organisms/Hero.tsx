import Image from "next/image"
import { Container } from "../atoms/Container"
import { Button } from "../atoms/Button/Button"

type HeroProps = {
  heroHeight?: number
  heroWidth?: number
  imgSrc?: string
  imgAlt?: string
}

const Hero = ({
  heroWidth = 1920,
  heroHeight = 972,
  imgSrc,
  imgAlt,
}: HeroProps) => {
  return (
    <section className="relative max-h-[90vh] h-full min-h-[500px]">
      <Image
        src="/images/hero.jpg"
        width={heroWidth}
        height={heroHeight}
        alt="hero"
        className="object-cover h-full w-full"
      />
      <Container className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center flex-col items-center">
        <h1>Hero</h1>
        <Button className="" intent="secondary" linkUrl="/">
          Start a GoFundMe
        </Button>
      </Container>
    </section>
  )
}

export default Hero
