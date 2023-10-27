import { Container } from "../../atoms/Container";
import CardCause, { CardCauseProps } from "../../molecules/CardCause/CardCause";
import SectionHeader, {
  SectionHeaderProps,
} from "../../molecules/SectionHeader";
import { featuredCardsDefault } from "../../../constants/mockData";

export type FeaturedTopicsProps = {
  /**
   * Description goes here
   */
  topText?: SectionHeaderProps["topText"];
  /**
   * Description goes here
   */
  title?: SectionHeaderProps["title"];
  /**
   * Description goes here
   */
  featuredCards?: CardCauseProps[];
};

const FeaturedTopics = ({
  featuredCards = featuredCardsDefault,
  topText = "Headline goes here",
  title = "Section Title",
}: FeaturedTopicsProps) => {
  return (
    <section>
      <Container>
        <SectionHeader topText={topText} title={title} />

        <div className="grid grid-cols-1  gap-6 lg:grid-cols-3">
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
