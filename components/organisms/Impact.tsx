import { impactCards } from "@/constants";
import { Container } from "../atoms/Container";
import CardImpact from "../molecules/CardImpact";
import SectionHeader from "../molecules/SectionHeader";

const Impact = () => {
  return (
    <section className="py-[104px]">
      <Container className="flex flex-col items-start gap-8 max-md:max-w-[600px] md:flex-row lg:items-center">
        <div className="mx-auto ml-0 flex flex-col md:items-center">
          <SectionHeader
            topText="Make your impact"
            title="Fundraise for..."
            titleStyles="text-[32px]"
            headerStyles="!mb-0"
          />
        </div>

        <div className="w-full">
          <div className="mx-auto grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactCards.map((card) => (
              <CardImpact
                imgSrc={card.imgSrc}
                key={card.title}
                link={card.link}
                title={card.title}
                imgAlt={card.imgAlt}
              />
            ))}

            {/* <CardImpact />
            <CardImpact /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
