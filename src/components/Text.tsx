import type { FC, HTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * @default false
   */
  asChild?: boolean;
  children: ReactNode;
  /**
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
}

export const Text: FC<TextProps> = (
  {
    asChild = false,
    children,
    className,
    size = "md",
    ...props
  }
) => {

  const Component = asChild ? Slot : "span";

  const classNames = clsx(
    "font-sans text-gray-100",
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg'
    },
    className
  );

  return <Component className={classNames} {...props}>{children}</Component>
}
