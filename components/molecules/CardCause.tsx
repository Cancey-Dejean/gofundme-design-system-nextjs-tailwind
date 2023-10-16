import classNames from "classnames";
import { Button } from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import { AngleRightSmallIcon } from "../atoms/Icons/Icons";
import { CardCauseProps } from "@/types";

const CardCause = ({
  featured = false,
  imgSrc,
  tagName,
  title,
  excerpt,
  btnText,
  link,
}: CardCauseProps) => {
  return (
    <div
      className={classNames(
        "flex overflow-hidden rounded-2xl",
        featured
          ? "min-h-[312px] flex-row [grid-template-columns:repeat(2,minmax(0,1fr))] first:col-span-3"
          : "min-h-[376px] flex-col",
      )}
    >
      <div
        className={classNames(
          "relative  bg-cover bg-center",
          featured ? "flex-1 pt-52" : "pt-56",
        )}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <span className="absolute left-4 top-4 min-h-[24px] rounded-xl bg-violet-100 px-2 text-[14px] font-bold">
          {tagName}
        </span>
      </div>

      <div
        className={classNames(
          "flex h-full  flex-col items-start bg-neutral-100",
          featured ? "flex-1 px-10 pb-8 pt-10" : " p-6",
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

        <div className="min-h-[56px]">
          <p
            className={classNames(
              " text-neutral-300",
              featured ? "text-body" : "text-[14px]",
            )}
          >
            {excerpt}
          </p>
        </div>

        <div className="mt-auto ">
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
      </div>
    </div>
  );
};

export default CardCause;
