import React from "react";
import Hero from "../../organisms/Hero/Hero";
import Steps from "../../organisms/Steps/Steps";
import FeaturedTopics from "../../organisms/FeaturedTopics/FeaturedTopics";
import Trusted from "../../organisms/Trusted/Trusted";
import Impact from "../../organisms/Impact/Impact";
import Community from "../../organisms/Community/Community";
import GetStarted from "../../../components/organisms/GetStarted";
import Header from "../../../components/organisms/Header/Header";

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
        {/* <GetStarted className="max-sm:pt-0" /> */}
      </main>
    </>
  );
};

export default HomePage;
