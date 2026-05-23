export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About us", href: "#" },
] as const;

export const COMPANIES = [
  { name: "Unsplash", logo: "/img/Unsplash.png" },
  { name: "Notion", logo: "/img/Notion.png" },
  { name: "INTERCOM", logo: "/img/INTERCOM.png" },
  { name: "descript", logo: "/img/descript.png" },
  { name: "grammarly", logo: "/img/grammarly.png" },
] as const;

export const RATING_POINTS = [
  {
    icon: "/img/publishing.png",
    title: "Publishing",
    className: "main-block-points-publishing",
    lines: [
      "Plan, collaborate, and publishing your contetn",
      "that drivees meaningful engagement and growth",
      "for your barnd",
    ],
  },
  {
    icon: "/img/analytics.png",
    title: "Analytics",
    className: "main-block-points-analytics",
    lines: ["Analyze your performance and create goegeous", "report"],
  },
  {
    icon: "/img/engagement.png",
    title: "Engagement",
    className: "main-block-points-engagement",
    lines: ["Quiuckly navigate you anda engage with your", "adience"],
  },
] as const;

export const FEATURE_CARDS = [
  {
    image: "/img/Coll-team.png",
    title: "Collboration Teams",
    lines: ["Here you can handle projects together", "with team virtually"],
  },
  {
    image: "/img/cloud-st.png",
    title: "Cloud Storage",
    lines: [
      "No nedd to worry about storage",
      "because we provide storage up to 2 TB",
    ],
  },
  {
    image: "/img/daily-analytics.png",
    title: "Daily Analytics",
    lines: [
      "We always provide useful informatin to make",
      "it easier for you every day",
    ],
    imageClass: "third",
  },
] as const;

export const BENEFITS = [
  "Free Consulting With Experet Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money For The Future",
  "Online Transection",
] as const;

export const PLAN_IMAGES = [
  { src: "/img/free.png", alt: "Free plan" },
  { src: "/img/pro.png", alt: "Pro plan" },
  { src: "/img/business.png", alt: "Business plan" },
] as const;

export const FOOTER_LINKS = {
  support: [
    { label: "Help centre", href: "#" },
    { label: "Account information", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact us", href: "#" },
  ],
  help: [
    { label: "Support docs", href: "#" },
    { label: "Talk to support", href: "#" },
    { label: "System status", href: "#" },
    { label: "Covid responde", href: "#" },
  ],
  product: [
    { label: "Update", href: "#" },
    { label: "Security", href: "#" },
    { label: "Beta test", href: "#" },
    { label: "Pricing product", href: "#" },
  ],
} as const;

export const REVIEWERS = [
  "/img/reviewer1.png",
  "/img/reviewer2.png",
  "/img/reviewer3.png",
  "/img/reviewer4.png",
] as const;
