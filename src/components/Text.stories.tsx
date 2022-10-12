import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import type { TextProps } from "./Text";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum.",
    size: 'md'
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    ),
    size: 'lg'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}
