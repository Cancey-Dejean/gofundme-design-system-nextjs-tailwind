import Text from "../atoms/Text/Text";
import { twMerge } from "tailwind-merge";

export type SectionHeaderProps = {
  topText?: string;
  title?: string;
  titleStyles?: string;
  headerStyles?: string;
};

const SectionHeader = ({
  topText = "Headline goes here",
  title = "Section Title",
  headerStyles = "",
  titleStyles = "",
}: SectionHeaderProps) => {
  return (
    <div className={twMerge(`mb-10 lg:mb-14`, headerStyles)}>
      {topText !== "" ? (
        <Text
          as="p"
          intent="bold"
          size="body"
          className="mb-4 text-neutral-300 dark:text-white"
        >
          {topText}
        </Text>
      ) : null}

      <Text
        as="h2"
        intent="semibold"
        size="display-two"
        className={titleStyles}
      >
        {title}
      </Text>
    </div>
  );
};

export default SectionHeader;
