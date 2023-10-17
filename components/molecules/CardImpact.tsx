import classNames from "classnames";
import { Button } from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import {
  AngleRightSmallIcon,
  AngleRightSmallIcon2,
  ArrowCircle,
} from "../atoms/Icons/Icons";
import { CardCauseProps } from "@/types";
import { featuredArticle } from "@/constants/images";
import Link from "next/link";
import Image from "next/image";

type CardImpactProps = {};

const CardImpact = ({}: CardImpactProps) => {
  return (
    <div className="flex flex-row items-center rounded-2xl bg-neutral-100 max-lg:last:col-span-2 max-sm:last:col-span-1 md:min-h-[369px] md:flex-col">
      <div className="md:mx-8 md:mt-8">
        <Image
          src="/images/start-yourself@2x.png"
          width={158}
          height={158}
          className="h-[79px] w-[79px] object-contain md:h-[158px] md:w-[158px]"
          alt=""
        />
      </div>
      <div className="md:mt-8">
        <Text as="h3" intent="semibold" size="heading-two">
          Yourself
        </Text>
      </div>

      <Link href="/" className="ml-auto mr-5 md:mx-auto md:mb-8 md:mt-auto">
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
