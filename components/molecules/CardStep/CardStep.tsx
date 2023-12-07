import { twMerge } from "tailwind-merge";
import CircleNumber from "../../atoms/CircleNumber";
import { StepArchOneIcon } from "../../atoms/Icons/Icons";
import Text from "../../atoms/Text/Text";
import classNames from "classnames";
// import { CardStepProps } from "@/types";

export type CardStepProps = {
  /**
   * Description goes here
   */
  number?: number;
  /**
   * Description goes here
   */
  title?: string;
  /**
   * Description goes here
   */
  description?: string;
  /**
   * Description goes here
   */
  stepImgDesktop?: React.ReactNode;
  /**
   * Description goes here
   */
  stepImgMobile?: React.ReactNode;
};

const CardStep = ({
  number = 1,
  title = "Title",
  description = "Lorem ipsum dolor sit amet.",
  stepImgDesktop,
  stepImgMobile,
}: CardStepProps) => {
  return (
    <div className="flex flex-1 flex-row gap-4 lg:flex-col  lg:gap-0">
      <div className="grid gap-4 md:mb-4 lg:mb-10 lg:[grid-template-columns:40px_1fr]">
        {number ? <CircleNumber number={number} /> : null}

        {stepImgDesktop ? (
          <div className="w-full">
            <div className="hidden lg:block">{stepImgDesktop}</div>
            <div className="block lg:hidden">{stepImgMobile}</div>
          </div>
        ) : null}
      </div>

      {title !== "" && description !== "" ? (
        <div>
          {title !== "" ? (
            <Text as="h3" size="heading-two" intent="semibold" className="mb-2">
              {title}
            </Text>
          ) : null}

          {description !== "" ? (
            <Text
              as="p"
              size="body"
              className="text-neutral-300  dark:text-white"
            >
              {description}
            </Text>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default CardStep;
