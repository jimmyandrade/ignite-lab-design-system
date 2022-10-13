import {Meta, StoryObj} from "@storybook/react";
import {SignIn} from "../pages/SignIn";
import {userEvent, waitFor, within} from "@storybook/testing-library"
import {expect} from "@storybook/jest";
import {rest} from "msw";

const meta: Meta = {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, context) => {
          return res(context.body("ok"));
        })
      ]
    }
  }
};

export default meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "diego@rocketseat.com.br");
    userEvent.type(canvas.getByPlaceholderText("Digite sua senha"), "12345678");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado")).toBeInTheDocument();
    });
  }
}
