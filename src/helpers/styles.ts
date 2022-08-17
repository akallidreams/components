import { ComponentType } from "react";
import styled, { useTheme } from "styled-components/native";
import {
  IMakeStyledComponent,
  IMakeStyledComponentProps,
  ITheme,
} from "./types";

export const makeStyledComponent = (
  { _style, _variant, _extraProps }: IMakeStyledComponentProps,
  Component: ComponentType<any>
): IMakeStyledComponent => {
  const theme: ITheme = useTheme() as ITheme;
  return styled(Component)`
    ${_extraProps || ""}
    ${theme.variants[_variant as keyof typeof theme.variants] || ""}
    ${_style}
  `;
};
