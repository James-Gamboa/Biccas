"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      "main-block-plan-buttons inline-flex items-center justify-center",
      className,
    )}
    {...props}
  />
);

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      "main-block-plan-button bil-month bil-year rounded-[10px] px-[30px] py-[15px] font-semibold text-ink transition-colors data-[state=active]:bg-brand data-[state=active]:text-[#f3f3f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
      className,
    )}
    {...props}
  />
);

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn("outline-none", className)} {...props} />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
