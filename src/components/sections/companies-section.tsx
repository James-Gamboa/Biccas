import { LegacyImage } from "@/components/ui/legacy-image";
import { COMPANIES } from "@/lib/constants";

export const CompaniesSection = () => (
  <div className="main-block-companies" data-animate="section">
    <div className="main-block-companies-container _container">
      <div className="main-block-companies-body">
        <div className="main-block-companies-title">
          <h1> More than 25,000 teams use Collabs</h1>
        </div>
        <div className="main-block-companies-names">
          {COMPANIES.map((company) => (
            <p key={company.name} className="company">
              <LegacyImage className="logo-company" src={company.logo} alt="" />
              {company.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
