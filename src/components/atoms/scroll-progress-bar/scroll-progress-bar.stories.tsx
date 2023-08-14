import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ScrollProgressBar,
  ScrollProgressBarProps,
} from "./scroll-progress-bar";
import { styled } from "../../../utils/styled";

const ScrollableContent = styled("div")`
  height: 2000px; // adjust the height to simulate longer content
  width: 100%;
  text-align: center;
  background: linear-gradient(
    to bottom,
    lightgrey,
    lightblue
  ); // to visualize the scrolling
`;

const meta: Meta<typeof ScrollProgressBar> = {
  title: "Atoms/ScrollProgressBar",
  component: ScrollProgressBar,
};

export default meta;
type Story = StoryObj<typeof ScrollProgressBar>;

const templateProps: ScrollProgressBarProps = {
  color: "#f00",
};

export const Default: Story = (args) => (
  <>
    <ScrollProgressBar {...args} />
    <ScrollableContent>
      Scroll down to see the progress bar ⬇️
    </ScrollableContent>
  </>
);

Default.args = {
  ...templateProps,
};
