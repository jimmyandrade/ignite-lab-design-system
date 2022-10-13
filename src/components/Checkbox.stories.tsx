import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox";
import {Text} from "./Text";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    "aria-labelledby": "checkbox-label",
    "id": "checkbox",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <form>
        <label className={"flex items-center gap-2"} htmlFor={"checkbox"}>
          {Story()}
          <Text id={"checkbox-label"} size={"sm"}>Lembrar de mim por 30 dias</Text>
        </label>
      </form>
    )
  ]
} as Meta<CheckboxProps>;

export default meta;

export const Default: StoryObj<CheckboxProps> = {};
