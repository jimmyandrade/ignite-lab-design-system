import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {}
};

export default meta;

export const Default: StoryObj<ButtonProps> = {}
