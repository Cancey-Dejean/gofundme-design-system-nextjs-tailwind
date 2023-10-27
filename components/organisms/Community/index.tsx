import { Container } from "../../atoms/Container";
import CardDonate, {
  CardDonateProps,
} from "../../molecules/CardDonate/CardDonate";
import SectionHeader, {
  SectionHeaderProps,
} from "../../molecules/SectionHeader";
import { communityCardsDefault } from "../../../constants/mockData";

export type CommunityProps = {
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
  communityCards?: Array<CardDonateProps>;
};

const Community = ({
  topText = "Headline goes here",
  title = "Section Title",
  communityCards = communityCardsDefault,
}: CommunityProps) => {
  return (
    <section>
      <Container>
        <SectionHeader
          topText={topText}
          title={title}
          titleStyles="!text-[32px]"
        />

        <div className="grid-cols1 grid gap-6 lg:grid-cols-3">
          {communityCards.map(
            ({
              imgSrc,
              tagName,
              title,
              excerpt,
              link,
              raisedAmount,
              numOfDonors,
            }) => (
              <CardDonate
                imgSrc={imgSrc}
                tagName={tagName}
                title={title}
                excerpt={excerpt}
                link={link}
                raisedAmount={raisedAmount}
                numOfDonors={numOfDonors}
                key={title}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
};

export default Community;
