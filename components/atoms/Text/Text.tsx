import {
  TextHeadingLevels,
  TextIntents,
  TextSizes,
} from "@/constants/storiesData";
import { cva } from "class-variance-authority";
import classNames from "classnames";

export type TextProps = {
  as: (typeof TextHeadingLevels)[number];
  /**
   * Is this the principal call to action on the page?
   */
  intent?: (typeof TextIntents)[number];

  className?: string;
  /**
   * How large should the button be?
   */
  size?: (typeof TextSizes)[number];
  /**
   * Button contents
   */
  children: React.ReactNode;
  // label?: string
};

const heading = cva("", {
  variants: {
    intent: {
      normal: ["font-normal"],
      semibold: ["font-medium"],
      bold: ["font-bold"],
    },
    size: {
      "display-one": ["text-display-one tracking-[-.02em]"],
      "display-two": ["text-display-two tracking-[-.02em]"],
      "heading-one": ["text-heading-one tracking-[-.02em]"],
      "heading-two": ["text-heading-two tracking-[-.02em]"],
      body: ["text-body"],
    },
  },
});

const Text = ({
  intent = "normal",
  size = "heading-one",
  as = "h1",
  children = "Heading goes here",
  className = "",
}: TextProps) => {
  const Element = as;
  return (
    <Element className={classNames(heading({ intent, size, className }))}>
      {children}
    </Element>
  );
};

export default Text;
