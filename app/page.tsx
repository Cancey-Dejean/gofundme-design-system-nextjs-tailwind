import FeaturedTopics from "@/components/organisms/FeaturedTopics";
import Hero from "@/components/organisms/Hero";
import Steps from "@/components/organisms/Steps";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Steps />
      <FeaturedTopics />
    </main>
  );
}
