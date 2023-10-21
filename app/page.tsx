import Impact from "@/components/organisms/Impact";
import Trusted from "@/components/organisms/Trusted";
import FeaturedTopics from "@/components/organisms/FeaturedTopics";
import Hero from "@/components/organisms/Hero/Hero";
import Steps from "@/components/organisms/Steps/Steps";
import Community from "@/components/organisms/Community";
import GetStarted from "@/components/organisms/GetStarted";

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
      <FeaturedTopics />
      <Trusted />
      <Impact className="pb-0 pt-14 md:py-[104px]" />
      <Community />
      <GetStarted className="max-sm:pt-0" />
    </main>
  );
}
