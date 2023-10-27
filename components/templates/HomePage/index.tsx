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

const HomePage = () => {
  return (
    <>
      <Header headerAnimation />
      <main className="flex-1">
        <Hero />
        <Steps />
        <FeaturedTopics />
        <Trusted />
        <Impact className="pb-0 pt-14 md:py-[104px]" />
        <Community />
        <GetStarted headline="Headline" className="max-sm:pt-0" />
      </main>
      <Footer footerLinks={footerLinksDefault} logo={<GoFundMe />} />
    </>
  );
};

export default HomePage;
