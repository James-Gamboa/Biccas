import Link from "next/link";

import { LegacyImage } from "@/components/ui/legacy-image";
import { FEATURE_CARDS } from "@/lib/constants";

const BrLines = ({ lines }: { lines: readonly string[] }) => (
  <>
    {lines.map((line, index) => (
      <span key={line}>
        {line}
        {index < lines.length - 1 ? <br /> : null}
      </span>
    ))}
  </>
);

export const FeaturesIntroSection = () => (
  <>
    <div className="main-block-features" aria-hidden="true" />
    <div className="main-block-features" data-animate="section">
      <div className="main-block-features-container _container">
        <div className="main-block-features-body">
          <div className="main-block-features-title">
            <h1>
              Our Features <br />
              you cab get
            </h1>
          </div>
          <div className="main-block-features-text">
            We offer a variety of interesting features that you can <br />
            help increase yor productivity at work and manage <br />
            your projrct esaly
          </div>
          <div className="main-block-features-button">
            <Link href="#" className="main-block-features-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const FeaturesCardsSection = () => (
  <div className="main-block-features-imgs" data-animate="section">
    <div className="main-block-features-img-container _container">
      <div className="main-block-features-img-body">
        {FEATURE_CARDS.map((feature) => (
          <div
            key={feature.title}
            className="main-block-features-img"
            data-animate-hover-lift
          >
            <LegacyImage
              className={`features-img ${"imageClass" in feature ? feature.imageClass : ""}`}
              src={feature.image}
              alt={feature.title}
            />
            <div className="main-block-features-img-title">
              <p>{feature.title}</p>
            </div>
            <div className="main-block-features-img-text">
              <p>
                <BrLines lines={feature.lines} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
