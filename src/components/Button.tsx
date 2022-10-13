import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import {clsx} from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default false
   */
  asChild?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (
  {
    asChild = false,
    children,
    className,
    type,
    ...props
  }
) => {

  const Component = asChild ? Slot : "button";

  const classNames = clsx(
    'bg-cyan-500 font-sans font-semibold outline-none px-4 py-3 rounded text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300',
    className
  );

  return (
    <Component className={classNames} type={type} {...props}>
      {children}
    </Component>
  );

}
