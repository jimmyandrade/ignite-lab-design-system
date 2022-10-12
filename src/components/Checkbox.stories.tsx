import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox";
import {Text} from "./Text";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <label className={"flex items-center gap-2"}>
        {Story()}
        <Text size={"sm"}>Lembrar de mim por 30 dias</Text>
      </label>
    )
  ]
} as Meta<CheckboxProps>;

export default meta;

export const Default: StoryObj<CheckboxProps> = {};
