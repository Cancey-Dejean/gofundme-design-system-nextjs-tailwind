import classNames from "classnames";
import { Button } from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import { AngleRightSmallIcon } from "../atoms/Icons/Icons";
import { CardCauseProps } from "@/types";
import { featuredArticle } from "@/constants/images";
import { formatExcerpt } from "@/utils";
import { MAX_EXCERPT_LENGTH } from "@/constants";

const CardCause = ({
  featured = false,
  imgSrc,
  tagName = "Tag Name",
  title = "Title",
  excerpt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.",
  btnText = "Read More",
  link = "/",
}: CardCauseProps) => {
  const formattedExcerpt = formatExcerpt(excerpt, MAX_EXCERPT_LENGTH);
  return (
    <div
      className={classNames(
        "block-link",
        "flex overflow-hidden rounded-2xl",
        featured
          ? "min-h-[312px] flex-col md:flex-row lg:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:first:col-span-3"
          : "min-h-[376px] flex-col",
      )}
    >
      <div
        className={classNames(
          "relative  bg-cover bg-center",
          featured ? "flex-1 pt-52" : "pt-56",
        )}
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

      <div
        className={classNames(
          "flex h-full flex-col items-start bg-neutral-100",
          featured ? "flex-1 p-6 pb-8 md:px-10 md:pt-10" : "p-6",
        )}
      >
        <Text
          as="h3"
          intent="bold"
          size={featured ? "heading-two" : "body"}
          className="mb-2"
        >
          {title}
        </Text>

        {formattedExcerpt && (
          <div className="mb-4 md:h-14">
            <p
              className={classNames(
                " text-neutral-300",
                featured ? "text-body" : "text-[14px]",
              )}
            >
              {excerpt}
            </p>
          </div>
        )}

        {btnText !== "" && (
          <div className="mt-auto">
            <Button
              className="w-full hover:bg-white hover:shadow-none"
              intent="text"
              size="small"
              linkUrl={link}
              shadow={false}
            >
              {btnText} <AngleRightSmallIcon className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCause;
