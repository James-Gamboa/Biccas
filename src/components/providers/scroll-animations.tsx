"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollAnimationsProps = {
  children: React.ReactNode;
};

export const ScrollAnimations = ({ children }: ScrollAnimationsProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      /* Below-fold sections only — hero stays visible on load (legacy had no fade-in) */
      const sections = gsap.utils.toArray<HTMLElement>(
        "[data-animate='section']:not([data-animate-hero])",
      );

      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='card']")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.55,
            delay: Math.min(index * 0.06, 0.24),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          });
        });

      /* Subtle parallax — skip hero image (negative margin layout is fragile) */
      gsap.utils
        .toArray<HTMLElement>(
          "[data-animate='parallax']:not([data-animate-hero])",
        )
        .forEach((el) => {
          gsap.to(el, {
            y: -16,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate-hover-lift]")
        .forEach((card) => {
          const handleEnter = () => {
            gsap.to(card, { y: -4, duration: 0.22, ease: "power2.out" });
          };
          const handleLeave = () => {
            gsap.to(card, { y: 0, duration: 0.22, ease: "power2.out" });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);
        });

      ScrollTrigger.refresh();
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="site-content">
      {children}
    </div>
  );
};
