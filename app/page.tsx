import Impact from "@/components/organisms/Impact/Impact";
import Trusted from "@/components/organisms/Trusted/Trusted";
import FeaturedTopics from "@/components/organisms/FeaturedTopics/FeaturedTopics";
import Hero from "@/components/organisms/Hero/Hero";
import Steps from "@/components/organisms/Steps/Steps";
import Community from "@/components/organisms/Community/Community";
import GetStarted from "@/components/organisms/GetStarted";
import { communityCards, featuredCards, impactCards } from "@/constants";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero
        headlineOneLine="Your home"
        headlineSecondLine="for help"
        imgSrcDesktop="/images/full-illustration-desktop2@2x.jpg"
        imgSrcMobile="/images/full-illustration-mobile@2x.jpg"
        imgAlt="Hero image"
        btnText="Start a GoFundMe"
      />
      <Steps
        topText="What to expect"
        headline="Fundraising on GoFundMe takes just a few minutes"
        cardOneTitle="Start with the basics"
        cardOneDesc="Kick things off with your name and location. "
        cardTwoTitle="Tell your story"
        cardTwoDesc="We'll guide you with tips along the way."
        cardThreeTitle="Share with friends and family"
        cardThreeDesc="People out there want to help you."
      />
      <FeaturedTopics
        featuredCards={featuredCards}
        topText="Where you can help"
        title="Featured topics"
      />
      <Trusted
        IconText="Trust & Safety"
        headline="We have your back."
        btnText="Explore Trust & Safety"
        btnLink="/"
      >
        With a global team dedicated to trust and
        <br />
        safety, we've successfully managed fundraisers
        <br />
        worldwide for more than a decade. Don't worry
        <br />
        about a thing, we've got you covered.
      </Trusted>

      <Impact
        className="pt-14 max-sm:pb-0 "
        topText="Make your impact"
        title="Fundraise for..."
        impactCards={impactCards}
      />

      <Community
        topText="Happening near you"
        title="Fundraisers in your community"
        communityCards={communityCards}
      />

      <GetStarted className="max-sm:pt-0" />
    </main>
  );
}
