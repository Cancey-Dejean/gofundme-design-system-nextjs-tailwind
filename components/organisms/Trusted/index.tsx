import { AngleRightSmallIcon2, CheckGearIcon } from "../../atoms/Icons/Icons";
import { Button } from "../../atoms/Button/Button";
import { Container } from "../../atoms/Container";
import Text from "../../atoms/Text/Text";

export type TrustedProps = {
  /**
   * Description goes here
   */
  iconText?: string;
  /**
   * Description goes here
   */
  headline?: string;
  /**
   * Description goes here
   */
  children?: React.ReactNode;
  /**
   * Description goes here
   */
  btnText?: string;
  /**
   * Description goes here
   */
  btnLink?: string;
};

/**
 * Primary UI component for user interaction
 */
const Trusted = ({
  iconText = "Text Goes Here",
  headline = "Headline",
  children = "Lorem ipsum dolor sit amet consectetur adipisicing elit rem in dolor sit amet consectetur.",
  btnText = "Button",
  btnLink = "/",
}: TrustedProps) => {
  return (
    <section className="flex items-center justify-center bg-primary-400 py-20 lg:mt-14">
      <Container className="px-0">
        <div className="mx-4 flex flex-col items-start rounded-2xl bg-primary-400 px-8 pt-0 md:p-20">
          {iconText !== "" && (
            <div className="mb-4 flex items-center gap-2">
              <CheckGearIcon />
              <Text
                as="p"
                className="text-white"
                intent="bold"
                size="heading-two"
              >
                {iconText}
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
              className="text-primary-500 hover:bg-white hover:shadow-none  dark:text-black"
              intent="text"
              size="small"
              linkUrl={btnLink}
              shadow={false}
              icon={<AngleRightSmallIcon2 className="h-3 w-3 " />}
              label={btnText}
              reverseIcon={true}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
