import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const TypographyClasses = cva("text-base", {
  variants: {
    /**
     * @summary specifies the color of the text
     * @default "weak"
     */
    palette: {
      inherit: "",
      base: "text-black custom-dark:text-white",
      weak: "text-base-700 custom-dark:text-base-400",
      weaker: "text-base-600 custom-dark:text-base-500",
      primary: "text-primary-800 custom-dark:text-primary-500",
    },
    /**
     * @summary specifies the size of the text
     * @default "body"
     */
    level: {
      subheading: "text-lg sm:text-xl",
      body: "text-base sm:text-lg",
      caption: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "body",
  },
});

export type TypographyProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof TypographyClasses>;

export const Typography = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ palette, level, className, ...props }, ref) => {
  const classes = TypographyClasses({ palette, level });

  return <p ref={ref} className={twMerge(classes, className)} {...props} />;
});
Typography.displayName = "Typography";
