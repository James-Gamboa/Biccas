import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biccas",
  description:
    "Increase your productivity with the Taskio Dashboard — organize work and manage projects every day.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={inter.variable}>
    <body className={inter.className}>
      <AppProviders>
        <div className="wrapper">
          <SiteHeader />
          {children}
        </div>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
