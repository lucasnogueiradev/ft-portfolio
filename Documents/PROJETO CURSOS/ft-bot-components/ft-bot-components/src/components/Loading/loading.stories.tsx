import React from "react";
import Skeleton from "./Loading";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton as React.FC,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta> & {
  render: () => React.ReactNode;
};

export const SkeletonLoading: Story = {
  render: () => <Skeleton />,
};
