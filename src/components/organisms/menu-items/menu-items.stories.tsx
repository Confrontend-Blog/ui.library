import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { MenuItems } from "./menu-items";

export default {
  title: "Organisms/MenuItems",
  component: MenuItems,
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>], // Wrap with router
} as Meta;

type Story = StoryObj<typeof MenuItems>;

export const Default: Story = (args) => <MenuItems {...args} />;

Default.args = {
  items: [
    {
      path: "/home",
      Icon: () => <span>🏠</span>,
      text: "Home",
    },
    {
      path: "/profile",
      Icon: () => <span>👤</span>,
      text: "Profile",
    },
  ],
};
