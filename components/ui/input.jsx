import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "hover:border-cyan-400 flex h-[48px] w-full rounded-xl border border-white/10 bg-primary px-4 py-5 text-base shadow-sm placeholder:text-white/60 ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
