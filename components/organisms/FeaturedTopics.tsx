import { featuredCards } from "@/constants";
import { Container } from "../atoms/Container";
import CardCause from "../molecules/CardCause";
import SectionHeader from "../molecules/SectionHeader";

type Props = {};

const FeaturedTopics = (props: Props) => {
  return (
    <section>
      <Container>
        <SectionHeader topText="Where you can help " title="Featured topics" />

        <div className="grid grid-cols-3 gap-6">
          {featuredCards.map((card, i) => (
            <CardCause
              featured={card.featured}
              btnText={card.btnText}
              key={i}
              excerpt={card.excerpt}
              tagName={card.tagName}
              title={card.title}
              link={card.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedTopics;
