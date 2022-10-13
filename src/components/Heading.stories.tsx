import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import type { HeadingProps } from "./Heading";
import {expect} from "@storybook/jest";
import {within} from "@storybook/testing-library";

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
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm"
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
  }
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg"
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
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
  },
};
