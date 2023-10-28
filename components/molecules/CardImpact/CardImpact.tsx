import classNames from "classnames";
import { Button } from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import {
  AngleRightSmallIcon,
  AngleRightSmallIcon2,
  ArrowCircle,
} from "../../atoms/Icons/Icons";
import { featuredArticle } from "@/constants/images";
import Link from "next/link";
import Image from "next/image";

export type CardImpactProps = {
  /**
   * Description goes here
   */
  imgSrc?: string;
  /**
   * Description goes here
   */
  imgAlt?: string;
  /**
   * Description goes here
   */
  title?: string;
  /**
   * Description goes here
   */
  link?: string;
};

const CardImpact = ({
  imgSrc = "http://dummyimage.com/158x158.png/ff4444/ffffff",
  imgAlt = "Card Icon",
  title = "Title",
  link = "/",
}: CardImpactProps) => {
  return (
    <div className="block-link flex min-w-[280px] flex-row items-center rounded-2xl border-2 border-transparent bg-neutral-100 transition-all duration-[.3s] ease-in-out hover:border-primary-300 max-lg:last:col-span-2 max-sm:last:col-span-1 md:min-h-[369px] md:flex-col">
      <div className="md:mx-8 md:mt-8">
        <Image
          src={imgSrc}
          width={158}
          height={158}
          className="h-[79px] w-[79px] object-contain md:h-[158px] md:w-[158px]"
          alt={imgAlt}
        />
      </div>
      <div className="md:mt-8">
        <Text as="h3" intent="semibold" size="heading-two">
          {title}
        </Text>
      </div>

      <Link href={link} className=" ml-auto mr-5 md:mx-auto md:mb-8 md:mt-auto">
        <div className="hidden md:block">
          <ArrowCircle />
        </div>

        <div className="block md:hidden">
          <AngleRightSmallIcon2 className="h-3 w-3 " />
        </div>
      </Link>
    </div>
  );
};

export default CardImpact;
