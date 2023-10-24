import React from "react";
import Hero from "../../organisms/Hero/Hero";
import Steps from "../../organisms/Steps/Steps";
import FeaturedTopics from "../../organisms/FeaturedTopics/FeaturedTopics";
import Trusted from "../../organisms/Trusted/Trusted";
import Impact from "../../organisms/Impact/Impact";
import Community from "../../organisms/Community/Community";
import GetStarted from "../../organisms/GetStarted/GetStarted";
import Header from "../../../components/organisms/Header/Header";
import Footer from "../../../components/organisms/Footer/Footer";
import { footerLinksDefault } from "../../../constants/mockData";

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
      <Footer footerLinks={footerLinksDefault} />
    </>
  );
};

export default HomePage;
