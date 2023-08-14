import React, { FormEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SignInForm } from "./signin-form";

const meta: Meta<typeof SignInForm> = {
  title: "Organisms/SignInForm",
  component: SignInForm,
  argTypes: {
    onSubmitCb: { action: "form submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Default: Story = (args) => <SignInForm {...args} />;
Default.args = {
  onSubmitCb: (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // To prevent default form submission behavior in storybook
  },
};
