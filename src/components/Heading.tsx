import type {FC, HTMLAttributes, ReactNode} from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @default false
   */
  asChild?: boolean;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Heading: FC<HeadingProps> = (
  {
    asChild = false,
    children,
    className,
    size = "md",
    ...props
  }
) => {

  const Component = asChild ? Slot : "h2";

  const classNames = clsx(
    "font-bold font-sans text-gray-100",
    {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    },
    className
  );

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );

};
