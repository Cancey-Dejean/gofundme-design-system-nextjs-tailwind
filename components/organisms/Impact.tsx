import { Container } from "../atoms/Container";
import CardImpact from "../molecules/CardImpact";
import SectionHeader from "../molecules/SectionHeader";

const Impact = () => {
  return (
    <section className="py-[104px]">
      <Container className="flex flex-col items-start gap-8 md:flex-row lg:items-center">
        <div className="md;items-center flex flex-col">
          <SectionHeader
            topText="Make your impact"
            title="Fundraise for..."
            titleStyles="text-[32px]"
            headerStyles="!mb-0"
          />
        </div>

        <div className="w-full">
          <div className="mx-auto grid max-w-[600px] gap-8 md:max-w-full md:grid-cols-2 lg:grid-cols-3">
            <CardImpact />
            <CardImpact />
            <CardImpact />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
