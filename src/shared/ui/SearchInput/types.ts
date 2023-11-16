import React from "react";

export interface ISearchInputProps {
  placeholder?: string;
  inputProps: object;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
