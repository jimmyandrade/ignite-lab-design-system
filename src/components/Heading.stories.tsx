import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import type { HeadingProps } from "./Heading";

const meta: Meta<HeadingProps> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum",
    size: "md"
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio"
      },
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm"
  }
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg"
  }
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>
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
};
