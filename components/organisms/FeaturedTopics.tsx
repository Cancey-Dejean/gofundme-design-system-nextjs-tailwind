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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredCards.map(
            ({ featured, btnText, title, excerpt, tagName, link, imgSrc }) => (
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
