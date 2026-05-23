"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LegacyImage } from "@/components/ui/legacy-image";
import { FOOTER_LINKS, REVIEWERS } from "@/lib/constants";

const demoSchema = z.object({
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const FooterSection = () => {
  const demoForm = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: { email: "", message: "" },
  });

  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const handleDemoSubmit = demoForm.handleSubmit(() => {
    demoForm.reset();
  });

  const handleNewsletterSubmit = newsletterForm.handleSubmit(() => {
    newsletterForm.reset();
  });

  return (
    <footer className="footer footer-full-width" data-animate="section">
      <div className="footer-block-container">
        <div className="footer-block footer-block--centered">
          <div className="footer-top-grid">
            <div className="footer-block-main">
              <div className="footer-block-title">
                <h1>
                  People are Saying
                  <br /> About DoWhith
                </h1>
              </div>
              <div className="footer-block-text">
                <p>
                  Everything you need to accept to payment and grow
                  <br />
                  your money of manage anywhere on planet
                </p>
              </div>
              <div className="footer-block-quote">
                <LegacyImage
                  className="footer-block-quote-width"
                  src="/img/quot.png"
                  alt=""
                />
              </div>
              <div className="footer-block-review">
                <div className="footer-block-review-text">
                  <p>
                    I am very helped by this E-wallet application , my <br />
                    days are very easy to use this application and its very
                    <br />
                    helpful in my life , even I can pay a short time 😍
                  </p>
                </div>
                <div className="footer-block-reviewer-name">
                  <h3>_ Aria Zinanrio</h3>
                </div>
                <div className="footer-block-reviewer-img">
                  {REVIEWERS.map((src) => (
                    <LegacyImage
                      key={src}
                      className="footer-block-reviewer-item"
                      src={src}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="get-started">
              <div className="get-started-title">
                <h1>Get Started</h1>
              </div>
              <form
                className="form-for-get-started"
                onSubmit={handleDemoSubmit}
                noValidate
              >
                <p>
                  <label htmlFor="name">Email</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your email"
                    aria-invalid={!!demoForm.formState.errors.email}
                    {...demoForm.register("email")}
                  />
                </p>
                <p>
                  <label htmlFor="Message">Message</label>
                  <br />
                  <textarea
                    id="Message"
                    placeholder="What are you say ?"
                    {...demoForm.register("message")}
                  />
                </p>
                <button type="submit" id="submit">
                  Request Demo
                </button>
              </form>
              <Link href="#" className="start-free-trial">
                or <b>Start Free Trial</b>
              </Link>
            </div>
          </div>

          <div className="footer-block-menu">
            <div className="footer-block-menu-form">
              <div className="footer-col">
                <div className="footer-block-menu-title">
                  <h1>Biccas</h1>
                </div>
                <div className="footer-block-menu-text">
                  <p> Get started noow try our product</p>
                </div>
                <form
                  className="menu-form"
                  onSubmit={handleNewsletterSubmit}
                  noValidate
                >
                  <div className="menu-form-field">
                    <input
                      type="email"
                      id="name1"
                      placeholder="Enter your email here"
                      aria-invalid={!!newsletterForm.formState.errors.email}
                      {...newsletterForm.register("email")}
                    />
                    <button
                      type="submit"
                      className="form-email"
                      aria-label="Subscribe"
                    >
                      <span className="form-email-arrow" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="footer-block-menu-block-links">
                <FooterLinkGroup title="Support" links={FOOTER_LINKS.support} />
                <FooterLinkGroup
                  title="Help and Solution"
                  links={FOOTER_LINKS.help}
                />
                <FooterLinkGroup title="Product" links={FOOTER_LINKS.product} />
              </div>
            </div>
          </div>

          <div className="footer-dowm">
            <div className="footer-block-menu-text-second">
              <p> © 2022 Biccas Inc. Copyright and rights reserved</p>
            </div>
            <div className="footer">
              <p className="footer-first">Terms and Condtions</p>
              <p className="footer-second">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkGroupProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
  <div className="footer-block-menu-block-link">
    <div className="footer-block-menu-block-link-title">
      <h1>{title}</h1>
    </div>
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="footer-block-menu-link-item"
      >
        {link.label}
      </Link>
    ))}
  </div>
);
