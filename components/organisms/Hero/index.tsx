import Image from "next/image";
import { Container } from "../../atoms/Container";
import { Button, ButtonProps } from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { SunIcon } from "../../atoms/Icons/Icons";

export type HeroProps = {
  /**
   * Description goes here
   */
  headlineOneLine?: string;
  /**
   * Description goes here
   */
  headlineSecondLine?: string;
  /**
   * Description goes here
   */
  imgSrcDesktop?: string;
  /**
   * Description goes here
   */
  imgSrcMobile?: string;
  /**
   * Description goes here
   */
  imgAlt?: string;
  /**
   * Description goes here
   */
  btnText?: string;
  /**
   * Description goes here
   */
  btnIcon?: ButtonProps["icon"];
};

/**
 * Primary UI component for user interaction
 */
const Hero = ({
  headlineOneLine = "Headline One Line",
  headlineSecondLine = "Second Line Goes Here",
  imgSrcDesktop = "https://dummyimage.com/1920x972.png/dddddd/ffffff",
  imgSrcMobile = "https://dummyimage.com/750x1225.png/dddddd/ffffff",
  imgAlt = "Hero image",
  btnText = "Button",
  btnIcon = <SunIcon className="h-[22px] w-[22px]" />,
}: HeroProps) => {
  return (
    <section className="relative h-[100vh] min-h-[500px] p-0 pt-14 md:h-[90vh] md:pt-0">
      {imgSrcDesktop && imgSrcMobile !== "" && (
        <div className="hidden h-full md:block">
          <Image
            src={imgSrcDesktop}
            width={1920}
            height={972}
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
            width={750}
            height={1225}
            alt={imgAlt}
            className="h-full w-full object-cover"
            priority={true}
          />
        </div>
      )}

      <Container className="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 flex-col items-center py-32 text-center lg:justify-center">
        <Text
          as="h1"
          size="display-one"
          intent="bold"
          className="text-navy dark:text-navy"
        >
          {headlineOneLine}
          <br />
          {headlineSecondLine}
        </Text>

        {btnText && (
          <div className="mt-8">
            <Button
              className="min-w-[208px]"
              intent="secondary"
              linkUrl="/"
              label={btnText}
              icon={btnIcon !== null ? btnIcon : null}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Hero;
