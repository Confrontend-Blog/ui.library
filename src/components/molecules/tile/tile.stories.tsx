import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tile } from "./tile"; // Ensure this path is correct.
import { styled } from "../../../utils/styled"; // Ensure this path is correct.
import { lightGreen } from "@mui/material/colors";

const meta: Meta<typeof Tile> = {
  title: "Molecules/Tile",
  component: Tile,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    width: { control: "text" },
    dimension: { control: { type: "select", options: ["1x1", "1x2", "2x1"] } },
  },
};

const content = (
  <div>
    <h1>Comparing Linaria and Styled-Components</h1>
    <h5>Total view: 10.3k</h5>
    <h5>Online since: 15.04.2023</h5>
  </div>
);

const sharedArgs = {
  content,
  width: "500px",
  style: { backgroundColor: "#b1b1b1" },
} as const;

export default meta;

type Story = StoryObj<typeof Tile>;

export const Default: Story = (args) => <Tile {...args} />;
Default.args = {
  title: "Sample Title",
  ...sharedArgs,
};

//... (The rest of your imports and the meta export)

export const Dimension1x1: Story = (args) => <Tile {...args} />;

Dimension1x1.args = {
  title: "Sample Title 1x1",
  dimension: "1x1",
  ...sharedArgs,
};

export const Dimension1x2: Story = (args) => <Tile {...args} />;
Dimension1x2.args = {
  title: "Sample Title 1x2",
  dimension: "1x2",
  ...sharedArgs,
};

export const Dimension2x1: Story = (args) => <Tile {...args} />;
Dimension2x1.args = {
  title: "Sample Title 2x1",
  dimension: "2x1",
  ...sharedArgs,
};
