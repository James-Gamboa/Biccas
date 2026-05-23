import Link from "next/link";

import { LegacyImage } from "@/components/ui/legacy-image";
import { PLAN_IMAGES } from "@/lib/constants";

export const PricingSection = () => (
  <div className="main-block-plan" data-animate="section">
    <div className="main-block-plan-container _container">
      <div className="main-block-plan-body">
        <div className="main-block-plan-title">
          <h1>
            Choose Plan
            <br />
            That&apos;s Right For You
          </h1>
        </div>
        <div className="main-block-plan-title-subtitle">
          <p>Choose plan that works best for you, feel free to contact us</p>
        </div>

        <div className="main-block-plan-buttons">
          <Link href="#" className="main-block-plan-button bil-month">
            Bil-Monthly
          </Link>
          <Link href="#" className="main-block-plan-button bil-year">
            Bil-Yearly
          </Link>
        </div>

        <div className="main-block-plan-names">
          {PLAN_IMAGES.map((plan) => (
            <LegacyImage
              key={plan.alt}
              className="main-block-plan-item"
              src={plan.src}
              alt={plan.alt}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
