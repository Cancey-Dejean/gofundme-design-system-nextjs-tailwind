import { twMerge } from "tailwind-merge";
import CircleNumber from "../atoms/CircleNumber";
import { StepArchOneIcon } from "../atoms/Icons/Icons";
import Text from "../atoms/Text/Text";
import classNames from "classnames";

type CardStepProps = {
  number?: number;
  title?: string;
  description?: string;
  stepImg?: React.ReactNode;
};

const CardStep = ({
  number = 1,
  title = "Title",
  description = "Lorem ipsum dolor sit amet.",
  stepImg,
}: CardStepProps) => {
  return (
    <li className="flex-1">
      <div className="mb-10 flex items-start">
        {number ? <CircleNumber number={number} /> : null}

        {stepImg ? <div>{stepImg}</div> : null}
      </div>

      {title !== "" && description !== "" ? (
        <div>
          {title !== "" ? (
            <Text as="h3" size="heading-two" intent="semibold">
              {title}
            </Text>
          ) : null}

          {description !== "" ? (
            <Text as="p" size="body">
              {description}
            </Text>
          ) : null}
        </div>
      ) : null}
    </li>
  );
};

export default CardStep;
