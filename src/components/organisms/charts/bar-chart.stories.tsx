import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BarChart from "./bar-chart";

const meta: Meta<typeof BarChart> = {
  title: "Organisms/BarChart",
  component: BarChart,
};

export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = (args) => <BarChart {...args} />;
Default.args = {
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales",
        data: [50, 20, 70, 45],
        backgroundColor: ["red", "blue", "green", "yellow"],
      },
    ],
  },
};
