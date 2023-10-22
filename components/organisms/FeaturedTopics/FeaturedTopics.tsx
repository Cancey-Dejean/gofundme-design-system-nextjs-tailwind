import { FeaturedTopicsProps } from "@/types";
import { Container } from "../../atoms/Container";
import CardCause from "../../molecules/CardCause";
import SectionHeader from "../../molecules/SectionHeader";
import { featuredCardsDefault } from "../../../constants/mockData";

const FeaturedTopics = ({
  featuredCards = featuredCardsDefault,
  topText,
  title,
}: FeaturedTopicsProps) => {
  return (
    <section>
      <Container>
        <SectionHeader topText={topText as string} title={title as string} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredCards
            .slice(0, 4)
            .map(
              ({
                featured,
                btnText,
                title,
                excerpt,
                tagName,
                link,
                imgSrc,
              }) => (
                <CardCause
                  featured={featured}
                  btnText={btnText}
                  key={title}
                  excerpt={excerpt}
                  tagName={tagName}
                  title={title}
                  link={link}
                  imgSrc={imgSrc}
                />
              ),
            )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedTopics;
