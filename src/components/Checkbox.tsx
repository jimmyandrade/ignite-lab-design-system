import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

import { Check } from "phosphor-react";
import type { FC } from "react";
import { clsx } from "clsx";

export interface CheckboxProps {
}

export const Checkbox: FC<CheckboxProps> = (
  {
  }
) => {

  const rootClassNames = clsx('bg-gray-800 h-6 outline-none p-[2px] rounded w-6 focus:ring-2 ring-cyan-300');
  const indicatorClassNames = clsx('h-5 text-cyan-500 w-5');

  return (
    <PrimitiveCheckbox.Root className={rootClassNames}>
      <PrimitiveCheckbox.CheckboxIndicator asChild={true}>
        <Check className={indicatorClassNames} weight={"bold"} />
      </PrimitiveCheckbox.CheckboxIndicator>
    </PrimitiveCheckbox.Root>
  );
}
