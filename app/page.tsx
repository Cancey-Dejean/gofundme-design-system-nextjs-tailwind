import Impact from "@/components/molecules/Impact";
import Trusted from "@/components/molecules/Trusted";
import FeaturedTopics from "@/components/organisms/FeaturedTopics";
import Hero from "@/components/organisms/Hero";
import Steps from "@/components/organisms/Steps";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero imgSrc="/images/full-illustration-desktop2@2x.jpg" />
      <Steps />
      <FeaturedTopics />
      <Trusted />
      <Impact />
    </main>
  );
}
