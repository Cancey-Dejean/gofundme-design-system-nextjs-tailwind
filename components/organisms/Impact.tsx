import { impactCards } from "@/constants";
import { Container } from "../atoms/Container";
import CardImpact from "../molecules/CardImpact";
import SectionHeader from "../molecules/SectionHeader";
import { twMerge } from "tailwind-merge";

type ImpactProps = {
  className?: string;
};

const Impact = ({ className = "" }: ImpactProps) => {
  return (
    <section className={twMerge(className)}>
      <Container className="flex flex-col items-start gap-8 max-md:max-w-[600px] md:flex-row lg:items-center">
        <div className="mx-auto ml-0 flex flex-col md:items-center">
          <SectionHeader
            topText="Make your impact"
            title="Fundraise for..."
            titleStyles="text-[28px] text-[32px]"
            headerStyles="!mb-0"
          />
        </div>

        <div className="w-full">
          <div className="mx-auto grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactCards.map(({ imgSrc, imgAlt, title, link }) => (
              <CardImpact
                imgSrc={imgSrc}
                key={title}
                link={link}
                title={title}
                imgAlt={imgAlt}
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
