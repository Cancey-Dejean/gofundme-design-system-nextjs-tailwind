import { AngleRightSmallIcon, CheckGearIcon } from "../atoms/Icons/Icons";
import { Button } from "../atoms/Button/Button";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";

const Trusted = () => {
  return (
    <section className="flex items-center justify-center p-0">
      <Container className="px-0">
        <div className="mx-4 flex flex-col items-start rounded-2xl bg-primary-400 p-20">
          <div className="mb-4 flex items-center gap-2">
            <CheckGearIcon />
            <Text
              as="p"
              className="text-white"
              intent="bold"
              size="heading-two"
            >
              Trust & Safety
            </Text>
          </div>

          <Text
            as="h2"
            className="mb-2 leading-[1] text-white"
            intent="bold"
            size="heading-one"
          >
            We have your back.
          </Text>

          <Text
            as="h2"
            className=" leading-[1.1] text-white"
            size="heading-one"
          >
            With a global team dedicated to trust and
            <br />
            safety, we've successfully managed fundraisers
            <br />
            worldwide for more than a decade. Don't worry
            <br />
            about a thing, we've got you covered.
          </Text>

          <div className="mt-8">
            <Button
              className=" hover:bg-white hover:shadow-none"
              intent="text"
              size="small"
              linkUrl="/"
              shadow={false}
            >
              Explore Trust & Safety <AngleRightSmallIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
