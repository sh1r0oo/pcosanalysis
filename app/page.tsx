import Hero from "@/components/home/Hero";
import FeaturedSection from "@/components/home/FeaturedSection";
import KeyInsights from "@/components/home/KeyInsights";
import BackgroundAndMotivation from "@/components/home/BackgroundAndMotivation";

export default function Home() {
  return (
    <>
      <Hero />
      <BackgroundAndMotivation />
      <FeaturedSection />
      <KeyInsights />
    </>
  );
}