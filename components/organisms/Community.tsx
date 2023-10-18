import { AngleRightSmallIcon2, CheckGearIcon } from "../atoms/Icons/Icons";
import { Button } from "../atoms/Button/Button";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";
import CardDonate from "../molecules/CardDonate";
import SectionHeader from "../molecules/SectionHeader";
import { communityCards } from "@/constants";

const Community = () => {
  return (
    <section className="">
      <Container>
        <SectionHeader
          topText="Happening near you"
          title="Fundraisers in your community"
          titleStyles="!text-[32px]"
        />

        <div className="grid grid-cols-3 gap-6">
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
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
};

export default Community;
