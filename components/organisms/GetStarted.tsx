import Image from "next/image";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";
import { Button } from "../atoms/Button/Button";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type GetStartedProps = {
  className?: string;
};

const GetStarted = ({ className }: GetStartedProps) => {
  return (
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
              Ready to get started? Join thousands of others today.
            </Text>

            <div className={classNames("mt-8 flex flex-col gap-4 xl:flex-row")}>
              <Button
                intent="primary"
                label="Start a GoFundMe"
                className="min-w-[230px] bg-primary-300"
                size="large"
                linkUrl="/"
              />
              <Button
                intent="tertiary"
                label="How it works"
                className="min-w-[215px]"
                size="large"
                linkUrl="/"
              />
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/images/footer-flower-cta.png"
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
};

export default GetStarted;
