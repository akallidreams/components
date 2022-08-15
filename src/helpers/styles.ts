import { ComponentType } from "react";
import styled from "styled-components/native";
import { IMakeStyledComponent, IMakeStyledComponentProps } from "./types";

export const makeStyledComponent = (
  { _style, _variant, theme, extraProps }: IMakeStyledComponentProps,
  Component: ComponentType<any>
): IMakeStyledComponent => {
  return styled(Component)`
    ${extraProps || ""}
    ${theme.variants[_variant as keyof typeof theme.variants] || ""}
    ${_style}
  `;
};
