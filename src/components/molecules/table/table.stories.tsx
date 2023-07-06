import { Meta, StoryObj } from "@storybook/react";
import { Table, type TableProps } from "./table";

const data = [
  {
    col1: "Hello",
    col2: "World",
  },
  {
    col1: "React",
    col2: "Table",
  },
  {
    col1: "Angular",
    col2: "Component",
  },
];

const columns = [
  {
    Header: "Column 1",
    accessor: "col1",
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
];

const templateProps: TableProps<any> = {
  data,
  columns,
};

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    ...templateProps,
  },
};
