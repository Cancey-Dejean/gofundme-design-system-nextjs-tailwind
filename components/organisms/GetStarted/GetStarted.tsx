import Image from "next/image";
import { Container } from "../../atoms/Container";
import Text from "../../atoms/Text/Text";
import { Button, ButtonProps } from "../../atoms/Button/Button";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { GetStartedProps } from "@/types";

const GetStarted = ({
  className,
  imgSrc = "http://dummyimage.com/356x356.png/cc0000/ffffff",
  headline = "Headline",
  buttons = [
    {
      label: "Button 1",
      className: "min-w-[230px] bg-primary-300",
      intent: "primary",
      size: "large",
      linkUrl: "/",
    },
    {
      label: "Button 2",
      className: "min-w-[215px]",
      intent: "tertiary",
      size: "large",
      linkUrl: "/",
    },
  ],
}: GetStartedProps) => (
  <section className={twMerge(className)}>
    <Container className="px-4 md:px-[74px] xl:px-0">
      <div className="flex min-h-[426px] flex-col-reverse items-center rounded-2xl bg-neutral-100  p-4 pt-0 xl:flex-row xl:pl-[100px]">
        <div className="ml:max-w-[510px]">
          <Text
            as="h2"
            intent="semibold"
            size="display-two"
            className="my-4 text-center tracking-[-0.02em] max-sm:text-[32px] xl:m-0 xl:text-left"
          >
            {headline}
          </Text>

          <div className={classNames("mt-8 flex flex-col gap-4 xl:flex-row")}>
            {buttons.map(
              ({
                label,
                linkUrl,
                intent,
                className,
                size,
                shadow,
                reverseIcon,
              }) => (
                <Button
                  key={label}
                  intent={intent}
                  label={label}
                  className={className}
                  size={size}
                  linkUrl={linkUrl}
                  reverseIcon={reverseIcon}
                  shadow={shadow}
                />
              ),
            )}
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={imgSrc}
            width={356}
            height={356}
            alt="Flower"
            className="mx-auto h-auto max-w-[200px] pt-6 xl:max-w-[356px]"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default GetStarted;
