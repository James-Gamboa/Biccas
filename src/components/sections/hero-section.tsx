import Link from "next/link";

import { LegacyImage } from "@/components/ui/legacy-image";

export const HeroSection = () => (
  <div className="main-block" data-animate-hero>
    <div className="main-block-container _container">
      <div className="main-block-body">
        <h1 className="main-block-title">
          We&apos;re here to <br /> Increase your
          <br /> Productivity
        </h1>
        <div className="main-block-vector">
          <LegacyImage className="vector" src="/img/Vector.png" alt="" />
        </div>
        <div className="main-block-text">
          Let&apos;s make your work more organize and easily using <br />
          the Taskio Dashboard with many of the latest
          <br />
          featuresin managing work every day.
        </div>
        <div className="main-block-buttons">
          <Link href="#" className="main-block-button">
            Try free trial
          </Link>
          <Link
            className="main-block-button-play-logo"
            href="#"
            aria-label="View demo video"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 4.16675C28.7432 4.16675 35.8333 11.2553 35.8333 20.0001C35.8333 28.7448 28.7432 35.8334 20 35.8334C11.2552 35.8334 4.16666 28.7448 4.16666 20.0001C4.16666 11.2553 11.2552 4.16675 20 4.16675Z"
                stroke="#191A15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 19.9919C25 18.64 18.0709 14.3152 17.2848 15.0928C16.4988 15.8705 16.4232 24.0401 17.2848 24.891C18.1464 25.7449 25 21.3438 25 19.9919Z"
                stroke="#191A15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#" className="main-block-button-img">
            View demo
          </Link>
        </div>
      </div>
    </div>
    <div className="main-block-container-img _container">
      <div className="main-block-img">
        <div className="img-man">
          <LegacyImage
            className="img-man-add"
            src="/img/man.png"
            alt="Productivity dashboard preview"
          />
        </div>
      </div>
    </div>
  </div>
);
