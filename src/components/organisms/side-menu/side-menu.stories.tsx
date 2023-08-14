import React, { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import SideMenu from "./side-menu";

const meta: Meta<typeof SideMenu> = {
  title: "Organisms/SideMenu",
  component: SideMenu,
  argTypes: {
    logoutCb: { action: "logged out" },
  },
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

const MenuItemsComponent: ComponentType = () => (
  <div>
    <p>Menu Item 1</p>
    <p>Menu Item 2</p>
  </div>
);

export const Default: Story = (args) => (
  <MemoryRouter>
    <SideMenu {...args} MenuItems={MenuItemsComponent} />
  </MemoryRouter>
);
Default.args = {
  logoutPath: "/logout",
};
