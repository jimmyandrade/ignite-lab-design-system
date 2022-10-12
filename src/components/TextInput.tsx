import type {FC, HTMLAttributes, InputHTMLAttributes, ReactNode, SVGAttributes} from "react";
import { Slot } from '@radix-ui/react-slot';
import {clsx} from "clsx";

export interface TextInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TextInputRoot: FC<TextInputRootProps> = (
  {
    className,
    children,
    ...props
  }
) => {

  const classNames = clsx(
    'bg-gray-800 flex gap-3 h-12 items-center overflow-hidden px-3 py-4 rounded w-full focus-within:ring-2 ring-cyan-300',
    className
  );

  return <div className={classNames} {...props}>{children}</div>;
}
TextInputRoot.displayName = "TextInput.Root";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * @default false
   */
  asChild?: boolean;
}

export interface TextInputIconProps {
  children: ReactNode;
  className?: SVGAttributes<SVGSVGElement>;
}

const TextInputIcon: FC<TextInputIconProps> = (
  {
    children,
    className,
    ...props
  }
) => {

  const classNames = clsx(
    'h-6 text-gray-400 w-6',
    className
  );

  return (
    <Slot className={classNames} {...props}>
      {children}
    </Slot>
  );

}
TextInputIcon.displayName = "TextInput.Icon";

const TextInputInput: FC<TextInputInputProps> = (
  {
    asChild = false,
    className,
    placeholder,
    type,
    ...props
  }
) => {

  const Component = asChild ? Slot : 'input';

  const classNames = clsx(
    'bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
  );

  return (
    <Component
      className={classNames}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );

}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Icon: TextInputIcon,
  Root: TextInputRoot,
  Input: TextInputInput
}
