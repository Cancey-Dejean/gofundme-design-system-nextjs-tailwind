import Image from "next/image";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";
import { Button } from "../atoms/Button/Button";
import classNames from "classnames";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <section>
      <Container className="px-0">
        <div className="flex min-h-[426px] items-center rounded-2xl bg-neutral-100 pl-[100px]">
          <div className="max-w-[510px]">
            <Text
              as="h2"
              intent="semibold"
              size="display-two"
              className="tracking-tighter"
            >
              Ready to get started? Join thousands of others today.
            </Text>

            <div className={classNames("mt-8 flex gap-4")}>
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
              className="mx-auto pt-6"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
