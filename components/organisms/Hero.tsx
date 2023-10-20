import Image from "next/image";
import { Container } from "../atoms/Container";
import { Button } from "../atoms/Button/Button";
import { heroDefault } from "@/constants/images";
import Text from "../atoms/Text/Text";
import { SunIcon } from "../atoms/Icons/Icons";

const Hero = ({
  heroWidth = 1920,
  heroHeight = 972,
  imgSrc = heroDefault,
  imgAlt = "Hero image",
}) => {
  return (
    <section className="relative h-full max-h-[90vh] min-h-[500px] p-0">
      <Image
        src={imgSrc}
        width={heroWidth}
        height={heroHeight}
        alt={imgAlt}
        className="h-full w-full object-cover"
        priority={true}
      />
      <Container className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center">
        <Text as="h1" size="display-one" intent="bold" className="text-navy">
          Your home <br />
          for help
        </Text>

        <div className="mt-8">
          <Button className="" intent="secondary" linkUrl="/">
            <SunIcon
              className="h-[22px] w-[22px]"
              pathFill="var(--color-primary-200)"
            />
            Start a GoFundMe
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
