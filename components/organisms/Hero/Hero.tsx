import Image from "next/image";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button/Button";
import { heroDefault } from "../../../constants/images";
import Text from "../../atoms/Text/Text";
import { SunIcon } from "../../atoms/Icons/Icons";
import { HeroProps } from "@/types";

const Hero = ({
  headlineOneLine = "Headline One Line",
  headlineSecondLine = "Second Line Goes Here",
  imgSrcDesktop = heroDefault,
  imgSrcMobile = heroDefault,
  imgAlt = "Hero image",
  btnText = "Button Text",
}: HeroProps) => {
  const heroWidth = 1920;
  const heroHeight = 972;
  return (
    <section className="relative h-[100vh] min-h-[500px] p-0 pt-14 md:h-[90vh] md:pt-0">
      {imgSrcDesktop && (
        <div className="hidden h-full md:block">
          <Image
            src={imgSrcDesktop}
            width={heroWidth}
            height={heroHeight}
            alt={imgAlt}
            className="h-full w-full object-cover"
            priority={true}
          />
        </div>
      )}

      {imgSrcMobile && (
        <div className="block h-full md:hidden">
          <Image
            src={imgSrcMobile}
            width={heroWidth}
            height={heroHeight}
            alt={imgAlt}
            className="h-full w-full object-cover"
            priority={true}
          />
        </div>
      )}

      <Container className="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 flex-col items-center py-32 text-center lg:justify-center">
        <Text as="h1" size="display-one" intent="bold" className="text-navy">
          {headlineOneLine}
          <br />
          {headlineSecondLine}
        </Text>

        {btnText && (
          <div className="mt-8">
            <Button className="min-w-[208px]" intent="secondary" linkUrl="/">
              <SunIcon
                className="h-[22px] w-[22px]"
                pathFill="var(--color-primary-200)"
              />
              {btnText}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Hero;
