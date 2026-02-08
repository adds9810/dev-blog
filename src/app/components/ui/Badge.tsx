import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        {
          'border-transparent bg-indigo-600 text-white shadow hover:bg-indigo-700': variant === 'default',
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100': variant === 'secondary',
          'text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700': variant === 'outline',
          'border-transparent bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-300': variant === 'accent',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
