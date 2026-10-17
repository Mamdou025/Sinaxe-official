import { BlogTeaser } from "@/components/blog-teaser";
import { BuyerSegments } from "@/components/buyer-segments";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { GetThingsDone } from "@/components/get-things-done";
import { Hero } from "@/components/hero";
import { KeyCapabilities } from "@/components/key-capabilities";
import { NavBar } from "@/components/nav-bar";
import { ProductivityFeatures } from "@/components/productivity-features";
import { SiteFooter } from "@/components/site-footer";
import { WhyChooseUs } from "@/components/why-choose-us";

// No testimonials section: per the content intake questionnaire
// (2026-10-13), there are no real customer quotes yet, so the six
// fabricated ones came out rather than staying as placeholders.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <Hero />
      <BuyerSegments />
      <ProductivityFeatures />
      <KeyCapabilities />
      <GetThingsDone />
      <WhyChooseUs />
      <BlogTeaser />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}
