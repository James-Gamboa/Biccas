import { LegacyImage } from "@/components/ui/legacy-image";
import { BENEFITS } from "@/lib/constants";

export const BenefitsSection = () => (
  <div className="main-block-benifit" data-animate="section">
    <div className="main-block-benifit-container _container">
      <div className="main-block-benifit-body">
        <div className="main-block-benifit-body-title">
          <h1>
            What Benifit Will
            <br /> You Get
          </h1>
        </div>
        <div className="main-block-benifit-body-list">
          {BENEFITS.map((benefit) => (
            <p key={benefit} className="main-block-benifit-body-item">
              <LegacyImage
                className="main-block-benifit-body-img"
                src="/img/Subtract.png"
                alt=""
              />
              {benefit}
            </p>
          ))}
        </div>
        <div className="main-block-benifit-body-laptop">
          <LegacyImage src="/img/laptop.png" alt="Dashboard on laptop" />
        </div>
      </div>
    </div>
  </div>
);
