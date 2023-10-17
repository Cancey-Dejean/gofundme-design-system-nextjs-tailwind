import Impact from "@/components/organisms/Impact";
import Trusted from "@/components/organisms/Trusted";
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
