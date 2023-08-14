import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import { TopBar } from "./top-bar";

const meta: Meta<typeof TopBar> = {
  title: "Organisms/TopBar",
  component: TopBar,
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = (args) => (
  <MemoryRouter>
    <TopBar {...args} />
  </MemoryRouter>
);
Default.args = {
  username: "JohnDoe",
  pageTitle: "Dashboard",
};
