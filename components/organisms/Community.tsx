import { AngleRightSmallIcon2, CheckGearIcon } from "../atoms/Icons/Icons";
import { Button } from "../atoms/Button/Button";
import { Container } from "../atoms/Container";
import Text from "../atoms/Text/Text";
import CardDonate from "../molecules/CardDonate";

const Community = () => {
  return (
    <section className="">
      <Container>
        <h1>Community</h1>

        <div className="flex">
          <CardDonate />
          <CardDonate />
          <CardDonate />
        </div>
      </Container>
    </section>
  );
};

export default Community;
