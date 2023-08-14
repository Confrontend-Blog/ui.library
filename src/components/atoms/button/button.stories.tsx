import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const templateProps: ButtonProps = {
  children: "Template Button",
  disabled: false,
  type: "button",
  onClick: (e) => console.log("clicked", e),
};

export const Default: Story = {
  args: {
    ...templateProps,
    children: "Default Button",
  },
};

export const DisabledButton: Story = {
  args: {
    ...templateProps,
    children: "Disabled Button",
    disabled: true,
  },
};
