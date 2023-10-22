import { AngleRightSmallIcon2, CheckGearIcon } from "../../atoms/Icons/Icons";
import { Button } from "../../atoms/Button/Button";
import { Container } from "../../atoms/Container";
import Text from "../../atoms/Text/Text";
import { ReactNode } from "react";

export type TrustedProps = {
  IconText?: string;
  headline?: string;
  children?: ReactNode;
  btnText?: string;
  btnLink?: string;
};

const Trusted = ({
  IconText = "Text Goes Here",
  headline = "Headline",
  children = "Lorem ipsum dolor sit amet consectetur adipisicing elit rem in dolor sit amet consectetur.",
  btnText = "Button",
  btnLink = "/",
}: TrustedProps) => {
  return (
    <section className="flex items-center justify-center bg-primary-400 py-20 lg:mt-14">
      <Container className="px-0">
        <div className="mx-4 flex flex-col items-start rounded-2xl bg-primary-400 px-8 pt-0 md:p-20">
          {IconText && (
            <div className="mb-4 flex items-center gap-2">
              <CheckGearIcon />
              <Text
                as="p"
                className="text-white"
                intent="bold"
                size="heading-two"
              >
                {IconText}
              </Text>
            </div>
          )}

          {headline && (
            <Text
              as="h2"
              className="mb-2 leading-[1] text-white max-md:!text-[40px]"
              intent="bold"
              size="heading-one"
            >
              {headline}
            </Text>
          )}

          <Text
            as="p"
            className=" max-w-[830px] leading-[1.1] text-white"
            size="heading-one"
          >
            {children}
          </Text>

          <div className="mt-8">
            <Button
              className="text-primary-500 hover:bg-white hover:shadow-none"
              intent="text"
              size="small"
              linkUrl={btnLink}
              shadow={false}
            >
              {btnText}
              <AngleRightSmallIcon2 className="h-3 w-3 " />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
