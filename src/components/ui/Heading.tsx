import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const HeadingClasses = cva("text-base", {
  variants: {
    /**
     * @summary specifies the color of the text. Defaults to `weak`
     */
    palette: {
      inherit: "",
      base: "text-black dark:text-white",
      weak: "text-base-700 dark:text-base-400",
      weaker: "text-base-600 dark:text-base-500",
      primary: "text-primary-900 dark:text-primary-500",
    },
    /**
     * @summary specifies the size of the text. Defaults to `body`
     */
    level: {
      h1: "text-5xl sm:text-6xl font-light tracking-tight",
      h2: "text-3xl sm:text-4xl font-light tracking-tight",
      h3: "text-xl sm:text-2xl font-light",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "h3",
  },
});

export type HeadingProps = React.ComponentPropsWithoutRef<"h1" | "h2" | "h3"> &
  VariantProps<typeof HeadingClasses> & {
    /**
     * @summary informs the dom type. Defaults to `p`
     */
    as?: "h3" | "h2" | "h1";
  };

export const Heading = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ palette, level = "h3", as, className, ...props }, ref) => {
    const classes = HeadingClasses({ palette, level });

    // for some reason CVA allows null props so we have to chain nullish checks
    // it will be fixed soon. see: https://github.com/joe-bell/cva/issues/253
    const Component = as ?? level ?? "h3";

    return (
      <Component ref={ref} className={twMerge(classes, className)} {...props} />
    );
  }
);
Heading.displayName = "Heading";
