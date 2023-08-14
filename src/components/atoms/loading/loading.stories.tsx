import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";
import { styled } from "../../../utils/styled";

const meta: Meta<typeof Loading> = {
  title: "Atoms/Loading",
  component: Loading,
};

export default meta;

const Frame = styled("div")`
  height: 500px;
  width: 500px;
  border: 1px solid black;
`;

type Story = StoryObj<typeof Loading>;

export const Default: Story = (args) => (
  <Frame>
    <Loading {...args} />
  </Frame>
);
Default.args = {};
