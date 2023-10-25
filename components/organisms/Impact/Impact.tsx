import { impactCardsDefault } from "../../../constants/mockData";
import { Container } from "../../atoms/Container";
import CardImpact from "../../molecules/CardImpact/CardImpact";
import SectionHeader from "../../molecules/SectionHeader";
import { twMerge } from "tailwind-merge";
import { ImpactProps } from "../../../types";

const Impact = ({
  className = "",
  topText = "Text goes here",
  title = "Headline goes here",
  impactCards = impactCardsDefault,
}: ImpactProps) => {
  return (
    <section className={twMerge(className)}>
      <Container className="flex flex-col items-start gap-8 max-md:max-w-[600px] md:flex-row lg:items-center">
        <div className="mx-auto ml-0 flex flex-col md:items-center">
          <SectionHeader
            topText={topText}
            title={title}
            titleStyles="!text-[28px] md:!text-[32px]"
            headerStyles="!mb-0"
          />
        </div>

        <div className="w-full">
          <div className="mx-auto grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactCards.map(({ imgSrc, imgAlt, title, link }) => (
              <CardImpact
                imgSrc={imgSrc}
                key={title}
                link={link}
                title={title}
                imgAlt={imgAlt}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
