import { Container } from "../../atoms/Container";
import {
  StepArchOneIcon,
  StepArchOneIconMobile,
  StepArchThreeIcon,
  StepArchTwoIcon,
  StepArchTwoIconMobile,
} from "../../atoms/Icons/Icons";
import CardStep from "../../molecules/CardStep/CardStep";
import SectionHeader from "../../molecules/SectionHeader";

export type StepsProps = {
  /**
   * Description goes here
   */
  topText?: string;
  /**
   * Description goes here
   */
  headline?: string;
  /**
   * Description goes here
   */
  cardOneTitle?: string;
  /**
   * Description goes here
   */
  cardOneDesc?: string;
  /**
   * Description goes here
   */
  cardTwoTitle?: string;
  /**
   * Description goes here
   */
  cardTwoDesc?: string;
  /**
   * Description goes here
   */
  cardThreeTitle?: string;
  /**
   * Description goes here
   */
  cardThreeDesc?: string;
};

/**
 * Primary UI component for user interaction
 */
const Steps = ({
  topText = "Text goes here",
  headline = "Section Title",
  cardOneTitle = "Card Title 1",
  cardOneDesc = "Lorem ipsum dolor sit amet.",
  cardTwoTitle = "Card Title 2",
  cardTwoDesc = "Nullam nisl purus, venenatis et urna vel",
  cardThreeTitle = "Card Title 3",
  cardThreeDesc = "Aliquam eget fermentum enim quis tempus.",
}: StepsProps) => {
  return (
    <section>
      <Container>
        <div className="max-w-[541px]">
          <SectionHeader topText={topText} title={headline} />
        </div>

        <div className="flex flex-col items-start gap-4 lg:flex-row lg:pt-4">
          <CardStep
            number={1}
            stepImgDesktop={<StepArchOneIcon className="-mt-4" />}
            stepImgMobile={<StepArchOneIconMobile className="ml-5" />}
            title={cardOneTitle}
            description={cardOneDesc}
          />

          <CardStep
            number={2}
            stepImgDesktop={<StepArchTwoIcon className="relative top-8" />}
            stepImgMobile={<StepArchTwoIconMobile className="ml-4" />}
            title={cardTwoTitle}
            description={cardTwoDesc}
          />

          <CardStep
            number={3}
            stepImgDesktop={<StepArchThreeIcon className="-ml-6 -mt-4" />}
            title={cardThreeTitle}
            description={cardThreeDesc}
          />
        </div>
      </Container>
    </section>
  );
};

export default Steps;
