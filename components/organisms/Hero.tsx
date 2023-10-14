import Image from "next/image"
import { Container } from "../atoms/Container"
import { Button } from "../atoms/Button/Button"
import { heroDefault } from "@/constants/images"
import Text from "../atoms/Text/Text"

const Hero = ({
  heroWidth = 1920,
  heroHeight = 972,
  imgSrc = heroDefault,
  imgAlt = "Hero image",
}) => {
  return (
    <section className="relative lg:max-h-[90vh] h-full lg:min-h-[500px]">
      <Image
        // src="/images/hero.jpg"
        src={imgSrc}
        width={heroWidth}
        height={heroHeight}
        alt={imgAlt}
        className="object-cover h-full w-full"
      />
      <Container className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center flex-col items-center">
        <Text as="h1" size="display-one" intent="bold" className="text-navy">
          Your home <br />
          for help
        </Text>

        <div className="mt-8">
          <Button className="" intent="secondary" linkUrl="/">
            Start a GoFundMe
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero
