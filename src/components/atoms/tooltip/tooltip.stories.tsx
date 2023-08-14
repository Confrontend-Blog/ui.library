import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = (args) => (
  <Tooltip {...args}>
    <span>Hover over me</span>
  </Tooltip>
);
Default.args = {
  title: "This is a Tooltip!",
};
