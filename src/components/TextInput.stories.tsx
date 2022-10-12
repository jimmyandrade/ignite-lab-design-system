import type { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { TextInput } from "./TextInput";
import type { TextInputRootProps } from "./TextInput";

const meta: Meta<TextInputRootProps> = {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={"icon"}><Envelope /></TextInput.Icon>,
      <TextInput.Input key={"input"} placeholder={"Type your e-mail address"} type={"email"} />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
};

export default meta;

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input key={"input"} placeholder={"Type your e-mail address"} type={"email"} />
    ],
  }
}
