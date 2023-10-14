import { Container } from "../atoms/Container"
import Text from "../atoms/Text/Text"
import CardStep from "../molecules/CardStep"
import SectionHeader from "../molecules/SectionHeader"

type Props = {}

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

        <ol className="flex items-start">
          <CardStep />
          <CardStep />
          <CardStep />
        </ol>
      </Container>
    </section>
  )
}

export default Steps
