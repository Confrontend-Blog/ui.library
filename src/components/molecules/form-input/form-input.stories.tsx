import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./form-input"; // adjust the path accordingly

const meta: Meta<typeof FormInput> = {
  title: "Molecules/FormInput",
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const Default: Story = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <FormInput {...args} />
      </form>
    </FormProvider>
  );
};

Default.args = {
  label: "Name",
  name: "name",
};
