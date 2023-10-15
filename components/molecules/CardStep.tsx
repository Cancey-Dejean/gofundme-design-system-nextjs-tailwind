import { twMerge } from "tailwind-merge";
import CircleNumber from "../atoms/CircleNumber";
import { StepArchOneIcon } from "../atoms/Icons/Icons";
import Text from "../atoms/Text/Text";
import classNames from "classnames";

type CardStepProps = {
  number?: number;
  title?: string;
  description?: string;
  stepImgDesktop?: React.ReactNode;
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
    <li className="flex-1">
      <div className="mb-4 grid gap-4 lg:mb-10 lg:[grid-template-columns:40px_1fr]">
        {/* <div className="mb-10 flex items-start"> */}
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
            <Text as="p" size="body" className="text-neutral-300">
              {description}
            </Text>
          ) : null}
        </div>
      ) : null}
    </li>
  );
};

export default CardStep;
