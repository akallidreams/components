import React, { forwardRef, memo } from "react";
import { themedBG, themedFontSize } from "../helpers/styles";
import styled from "styled-components/native";
import {
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  FlexProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
  PositionProps,
  BorderProps,
  FlexboxProps,
} from "styled-system";
import { StyledComponentBase } from "styled-components";

/**
 * @summary Provides all types of semantic views using styled-components and styled-system.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution. Accepts key like ignoreProps, resolveResponsively.
 * @returns {object} Returns a styled component with shortcut based on System UI Theme Specification.
 */

export interface IView
  extends LayoutProps,
    ColorProps,
    SpaceProps,
    FlexProps,
    FlexboxProps,
    BorderProps,
    PositionProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const View = styled.View<IView>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;

export const Center = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const VCenter = styled(View)`
  align-items: center;
`;

export const HCenter = styled(View)`
  justify-content: center;
`;

export const VSection = styled(View)`
  flex-direction: column;
`;

export const HSection = styled(View)<IView>`
  flex-direction: row;
`;

// TODO: Increment this one
const Footernav = styled(View)``;

export const ScrollView = styled.ScrollView<IView>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;

// export default memo(forwardRef(View));
