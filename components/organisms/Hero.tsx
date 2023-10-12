import Image from "next/image"
import { Container } from "../atoms/Container"

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
      <Container className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        Hero
      </Container>
    </section>
  )
}

export default Hero
