import { AngleRightSmallIcon2, CheckGearIcon } from "../../atoms/Icons/Icons";
import { Button } from "../../atoms/Button/Button";
import { Container } from "../../atoms/Container";
import Text from "../../atoms/Text/Text";
import CardDonate from "../../molecules/CardDonate";
import SectionHeader from "../../molecules/SectionHeader";
import { communityCards } from "../../../constants";
import { communityCardsDefault } from "../../../constants/mockData";
import { CommunityProps } from "../../../types";

const Community = ({
  communityCards = communityCardsDefault,
  topText,
  title,
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
