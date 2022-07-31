import React, { forwardRef, memo } from "react";
import { themedBG, themedFontSize } from "../helpers/styles";
import styled from "styled-components/native";
import {
  color,
  space,
  layout,
  flexbox,
  position,
  FlexProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
  PositionProps,
} from "styled-system";

/**
 * @summary Provides all types of semantic views using styled-components and styled-system.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution. Accepts key like ignoreProps, resolveResponsively.
 * @returns {object} Returns a styled component with shortcut based on System UI Theme Specification.
 */

interface IProps
  extends LayoutProps,
    ColorProps,
    SpaceProps,
    FlexProps,
    PositionProps {
  children: React.ReactNode;
  ref: any;
}

export const View = styled.View`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG}
  ${themedFontSize}
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

export const HSection = styled(View)`
  flex-direction: row;
`;

export const Footer = styled(View)``;

export const Header = styled(View)``;

// export default memo(forwardRef(View));
