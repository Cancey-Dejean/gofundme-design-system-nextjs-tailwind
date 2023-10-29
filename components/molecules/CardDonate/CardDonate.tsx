import classNames from "classnames";
import Text from "../../atoms/Text/Text";
import { formatExcerpt } from "../../../utils";
import { MAX_EXCERPT_LENGTH } from "../../../constants";
import Link from "next/link";

export type CardDonateProps = {
  /**
   * Description goes here
   */
  imgSrc?: string;
  /**
   * Description goes here
   */
  tagName?: string;
  /**
   * Description goes here
   */
  title?: string;
  /**
   * Description goes here
   */
  excerpt?: string;
  /**
   * Description goes here
   */
  link?: string;
  /**
   * Description goes here
   */
  raisedAmount?: number;
  /**
   * Description goes here
   */
  numOfDonors?: number;
};

/**
 * Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.
 */
const CardDonate = ({
  imgSrc = "https://dummyimage.com/560x312.png/ff4444/ffffff",
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
        "block-link hover:bg-neutral-100 lg:min-w-[350px]",
        "flex overflow-hidden rounded-2xl",
        "transition-colors duration-[.3s] ease-in-out",
        "min-h-[376px] flex-col",
      )}
    >
      <div className="px-2 pt-2">
        <div
          className={classNames("relative rounded-xl bg-cover bg-center pt-56")}
          style={{
            backgroundImage: `url(${imgSrc})`,
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

        {raisedAmount < 1 && numOfDonors < 1 ? null : (
          <div className="mt-auto">
            <Text
              as="p"
              size="body"
              intent="bold"
              className="flex items-center gap-2"
            >
              {raisedAmount > 0 ? (
                <span>${raisedAmount.toLocaleString()} raised</span>
              ) : null}

              {numOfDonors > 0 ? (
                <>
                  <span className="text-neutral-200">·</span>
                  <span>{numOfDonors.toLocaleString()} donations</span>
                </>
              ) : null}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDonate;
