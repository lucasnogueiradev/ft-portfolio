import React from "react";
import InputText from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import { FaUser } from "react-icons/fa";

const meta = {
  title: "Components/Input",
  component: InputText,
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: (args) => (
    <InputText
      placeholder={args.placeholder}
      label={args.label}
      startAdornment={args.startAdornment}
    />
  ),
  args: {
    placeholder: "Email",
    label: "E-mail",
    startAdornment: <FaUser />,
  },
};
