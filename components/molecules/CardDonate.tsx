import classNames from "classnames";
import { Button } from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import { AngleRightSmallIcon } from "../atoms/Icons/Icons";
import { CardDonateProps } from "@/types";
import { featuredArticle } from "@/constants/images";
import { formatExcerpt } from "@/utils";
import { MAX_EXCERPT_LENGTH } from "@/constants";
import Link from "next/link";

const CardDonate = ({
  imgSrc,
  link = "/",
  tagName = "Tag Name",
  title = "Title",
  excerpt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.",
  raisedAmount = 0,
  numOfDonors = 0,
}: CardDonateProps) => {
  const formattedExcerpt = formatExcerpt(excerpt, MAX_EXCERPT_LENGTH);

  return (
    <div
      className={classNames(
        "block-link hover:bg-neutral-100",
        "flex overflow-hidden rounded-2xl",
        "transition-colors duration-[.3s] ease-in-out",
        "min-h-[376px] flex-col",
      )}
    >
      <div className="px-2 pt-2">
        <div
          className={classNames("relative rounded-xl bg-cover bg-center pt-56")}
          style={{
            backgroundImage: `url(${imgSrc || featuredArticle})`,
          }}
        >
          {tagName !== "" ? (
            <span className="absolute left-4 top-4 min-h-[24px] rounded-xl bg-violet-100 px-2 text-[14px] font-bold">
              {tagName}
            </span>
          ) : null}
        </div>
      </div>

      <div className={classNames("flex h-full flex-col items-start px-2 py-4")}>
        <Text as="h3" intent="bold" size="body" className="mb-2">
          <Link href={link}>{title}</Link>
        </Text>

        {formattedExcerpt && (
          <div className="md:h-14">
            <p className={classNames(" text-[14px] text-neutral-300")}>
              {formattedExcerpt}
            </p>
          </div>
        )}

        <div className="mt-auto">
          <Text
            as="p"
            size="body"
            intent="bold"
            className="flex items-center gap-2"
          >
            <span>${raisedAmount.toLocaleString()} raised</span>
            <span className="text-neutral-200">·</span>
            <span>{numOfDonors.toLocaleString()} donations</span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CardDonate;
