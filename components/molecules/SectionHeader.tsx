import { SectionHeaderProps } from "@/types";
import Text from "../atoms/Text/Text";

const SectionHeader = ({
  topText = "Headline goes here",
  title = "Section Title",
}: SectionHeaderProps) => {
  return (
    <div className="mb-14">
      <Text as="p" intent="bold" size="body" className="mb-4 text-neutral-300">
        {topText}
      </Text>

      <Text as="h2" intent="semibold" size="display-two">
        {title}
      </Text>
    </div>
  );
};

export default SectionHeader;