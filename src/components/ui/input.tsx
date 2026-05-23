import * as React from "react";

import { cn } from "@/lib/utils";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => (
  <input
    type={type}
    className={cn(
      "flex h-12 w-full rounded-[15px] border-0 bg-white px-5 text-sm text-ink outline-none ring-0 placeholder:text-muted-text/70 focus-visible:ring-2 focus-visible:ring-brand/40",
      className,
    )}
    {...props}
  />
);

export { Input };
