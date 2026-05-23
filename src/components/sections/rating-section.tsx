import { LegacyImage } from "@/components/ui/legacy-image";
import { RATING_POINTS } from "@/lib/constants";

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

export const RatingSection = () => (
  <div className="main-block-rating" data-animate="section">
    <div className="main-block-raiting-container _container">
      <div className="main-block-rating-body">
        <div className="main-block-rating-title">
          <h1>
            How we support our
            <br /> pratner all over the world
          </h1>
        </div>
        <div className="main-block-rating-text">
          SaaS become a common delivery model for many business application,
          including <br />
          office software, messaging software, payroll processing software, DBMS
          software,
          <br />
          management software
        </div>
        <div className="main-block-rating-evaluation">
          <div className="first-eva">
            <LegacyImage className="eva-stars" src="/img/first.png" alt="" />
            <p className="rating">
              <b>4.9</b>/ 5 rating
            </p>
            <p className="name-eva">databricks</p>
          </div>
          <div className="second-eva">
            <LegacyImage className="eva-stars" src="/img/second.png" alt="" />
            <p className="rating">
              <b>4.8</b> / 5 rating
            </p>
            <p className="name-eva">Chainalysis</p>
          </div>
        </div>
        <div className="main-block-points">
          {RATING_POINTS.map((point) => (
            <div key={point.title} className={point.className}>
              <p className="main-block-points-title">
                <LegacyImage className="squ" src={point.icon} alt="" />
                <b>{point.title}</b>
              </p>
              <p className="main-block-points-text">
                <BrLines lines={point.lines} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
