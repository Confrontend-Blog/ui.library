import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const templateProps: ButtonProps = {
  children: "Template Button",
  color: "#fff",
  bgColor: "#000",
  hoverColor: "#000",
  hoverBgColor: "#eee",
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
