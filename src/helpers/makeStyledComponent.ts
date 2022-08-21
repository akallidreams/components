import { ComponentType } from "react";
import styled from "styled-components/native";
import { IMakeStyledComponent, IMakeStyledComponentProps } from "./types";

export const makeStyledComponent = (
  { _style, _variant, _extraProps, _variants }: IMakeStyledComponentProps,
  Component: ComponentType<any>
): IMakeStyledComponent => {
  return styled(Component)`
    ${_extraProps || ""}
    ${(_variants && _variants[_variant as keyof typeof _variants]) || ""}
    ${_style}
  `;
};
