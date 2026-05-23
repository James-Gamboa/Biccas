import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = ({
  className,
  ...props
}: React.ComponentProps<"textarea">) => (
  <textarea
    className={cn(
      "flex min-h-[50px] w-full resize-none rounded-[15px] border-0 bg-white px-5 py-3 text-sm text-ink outline-none ring-0 placeholder:text-muted-text/70 focus-visible:ring-2 focus-visible:ring-brand/40",
      className,
    )}
    {...props}
  />
);

export { Textarea };
