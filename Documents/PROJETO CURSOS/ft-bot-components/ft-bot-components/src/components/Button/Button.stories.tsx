import React from "react";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import dark from "../../styles/themes/Dark";
import { useTheme } from "../hooks/theme";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primário: Story = {
  render: (args) => <Button>{args.children}</Button>,
  args: {
    children: "Button",
    color: "primary",
  },
};

// export const Primário: StoryObj = {
//   render: (args) => (
//     <Button primario title="teste" key={""} loading>
//       {args.}
//     </Button>
//   ),
//   args: {
//     title: "Button",
//   },
// };

// export const Secundário: Story = {
//   render: (args) => <Button secundario>{args.children}</Button>,
//   args: {
//     children: "Botão",
//   },
// };

// export const Carregando: Story = {
//   render: (args) => (
//     <Button carregando={args.carregando}>{args.children}</Button>
//   ),
//   args: {
//     children: "Botão",
//     carregando: true,
//   },
// };
