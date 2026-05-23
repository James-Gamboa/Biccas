"use client";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ScrollAnimations } from "@/components/providers/scroll-animations";

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <SmoothScrollProvider>
    <ScrollAnimations>{children}</ScrollAnimations>
  </SmoothScrollProvider>
);
