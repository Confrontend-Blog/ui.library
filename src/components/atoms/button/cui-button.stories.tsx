import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CuiButton, CuiButtonProps } from "./cui-button";

const meta: Meta<typeof CuiButton> = {
  title: "CuiButton",
  component: CuiButton,
};

export default meta;
type Story = StoryObj<typeof CuiButton>;

const templateProps: CuiButtonProps = {
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
