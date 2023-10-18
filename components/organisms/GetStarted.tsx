import Image from "next/image";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <section>
      <Container className="px-0">
        <div className="flex min-h-[426px] items-center rounded-2xl bg-neutral-100 pl-[100px]">
          <div className="flex-1">
            <Text as="h2" intent="bold" size="display-two">
              Ready to get started? Join thousands of others today.
            </Text>
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
