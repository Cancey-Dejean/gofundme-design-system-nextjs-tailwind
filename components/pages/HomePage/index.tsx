import React from "react";
import Hero from "../../organisms/Hero";
import Steps from "../../organisms/Steps";
import FeaturedTopics from "../../organisms/FeaturedTopics";
import Trusted from "../../organisms/Trusted";
import Impact from "../../organisms/Impact";
import Community from "../../organisms/Community";
import GetStarted from "../../organisms/GetStarted";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import { footerLinksDefault } from "../../../constants/mockData";
import { GoFundMe } from "../../../components/atoms/Logos/Logos";
import { SunIcon } from "../../../components/atoms/Icons/Icons";
import {
  communityCards,
  featuredCards,
  footerLinks,
  impactCards,
  legalLinks,
  navPrimary,
  navSecondary,
} from "../../../constants";

const HomePage = () => {
  return (
    <>
      <Header
        headerAnimation={true}
        navPrimary={navPrimary as Array<any>}
        navSecondary={navSecondary as Array<any>}
        logo={<GoFundMe />}
      />
      <main className="flex-1">
        <Hero
          headlineOneLine="Your home"
          headlineSecondLine="for help"
          imgSrcDesktop="/images/full-illustration-desktop2@2x.jpg"
          imgSrcMobile="/images/full-illustration-mobile@2x.jpg"
          imgAlt="Hero image"
          btnText="Start a GoFundMe"
          btnIcon={<SunIcon className="h-[22px] w-[22px]" />}
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
          iconText="Trust & Safety"
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
          className="pt-14  max-sm:pb-0 "
          topText="Make your impact"
          title="Fundraise for..."
          impactCards={impactCards}
        />

        <Community
          topText="Happening near you"
          title="Fundraisers in your community"
          communityCards={communityCards}
        />

        <GetStarted
          headline="Ready to get started? Join thousands of others today."
          className="max-sm:pt-0"
          imgSrc="/images/footer-flower-cta.png"
        />
      </main>
      <Footer
        footerLinks={footerLinks}
        legalLinks={legalLinks}
        logo={<GoFundMe />}
      />
    </>
  );
};

export default HomePage;
