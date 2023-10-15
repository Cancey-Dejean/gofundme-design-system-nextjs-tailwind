import { Container } from "../atoms/Container";
import {
  StepArchOneIcon,
  StepArchOneIconMobile,
  StepArchThreeIcon,
  StepArchTwoIcon,
} from "../atoms/Icons/Icons";
import Text from "../atoms/Text/Text";
import CardStep from "../molecules/CardStep";
import SectionHeader from "../molecules/SectionHeader";

type Props = {};

const Steps = (props: Props) => {
  return (
    <section className="py-14">
      <Container>
        <div className="max-w-[541px]">
          <SectionHeader
            topText="What to expect"
            title="Fundraising on GoFundMe takes just a few minutes"
          />
        </div>

        <ol className="flex flex-col items-start gap-4 pt-4 lg:flex-row">
          <CardStep
            number={1}
            stepImgDesktop={<StepArchOneIcon className="-mt-4" />}
            stepImgMobile={<StepArchOneIconMobile className="ml-5" />}
            title="Start with the basics"
            description="Kick things off with your name and location."
          />

          <CardStep
            number={2}
            stepImgDesktop={<StepArchTwoIcon className="relative top-8 ml-4" />}
            stepImgMobile={<StepArchOneIconMobile className="ml-5" />}
            title="Tell your story"
            description="We'll guide you with tips along the way."
          />

          <CardStep
            number={3}
            stepImgDesktop={<StepArchThreeIcon className="-ml-2 -mt-4" />}
            title="Share with friends and family"
            description="People out there want to help you."
          />
        </ol>
      </Container>
    </section>
  );
};

export default Steps;