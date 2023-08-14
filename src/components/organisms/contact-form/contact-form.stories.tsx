import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "./contact-form";

const meta: Meta<typeof ContactForm> = {
  title: "Organisms/ContactForm",
  component: ContactForm,
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = (args) => <ContactForm {...args} />;
Default.args = {
  userName: {
    label: "User Name",
    name: "userName",
    defaultValue: "JohnDoe",
  },
  email: {
    label: "Email",
    name: "email",
    defaultValue: "johndoe@example.com",
  },
  message: {
    label: "Message",
    name: "msg",
    defaultValue: "Hello there! This is a sample message.",
  },
};
