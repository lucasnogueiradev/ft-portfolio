import React from "react";

export type InputProps = {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  value?: string;
  label?: string;
  InputProps?: InputProps;
} & React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
}

export interface CheckboxProps {
  label?: string;
  type: string;
}
