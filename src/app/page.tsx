import { BenefitsSection } from "@/components/sections/benefits-section";
import { CompaniesSection } from "@/components/sections/companies-section";
import {
  FeaturesCardsSection,
  FeaturesIntroSection,
} from "@/components/sections/features-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { RatingSection } from "@/components/sections/rating-section";

const HomePage = () => (
  <>
    <main className="main">
      <HeroSection />
      <CompaniesSection />
      <RatingSection />
      <FeaturesIntroSection />
      <FeaturesCardsSection />
      <BenefitsSection />
      <PricingSection />
    </main>
    <FooterSection />
  </>
);

export default HomePage;
