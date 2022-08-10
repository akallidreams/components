import React, { memo } from "react";
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
import { ViewProps, ScrollViewProps } from "react-native";
import { For } from "./List";

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
    PositionProps,
    ViewProps {}

interface IScrollView extends ScrollViewProps, IView {}

export const StyledView = memo(styled.View<IView | any>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`);

export const Center = memo(styled(StyledView)`
  justify-content: center;
  align-items: center;
`);

export const VCenter = memo(styled(StyledView)`
  align-items: center;
`);

export const HCenter = memo(styled(StyledView)`
  justify-content: center;
`);

export const VSection = memo(styled(StyledView)`
  flex-direction: column;
`);

export const HSection = memo(styled(StyledView)<IView>`
  flex-direction: row;
`);

// TODO: Increment this one
const Footernav = memo(styled(StyledView)``);

// TODO: pick the TS here
export const ScrollView = memo(styled.ScrollView<IScrollView | any>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`);

interface IIf extends IView {
  _else?: React.ReactNode;
  _condition: boolean;
}

export const If = memo((props: IIf) => {
  const { _else, _condition, children, ...rest } = props;
  return (
    <StyledView {...rest}>
      {_condition ? children : _else && _else()}
    </StyledView>
  );
});

interface IViewSuper extends IView {
  _condition?: boolean;
  _else?: React.ReactNode;
  _list?: any;
  _item?: React.ReactNode;
}

export const View = memo((props: IViewSuper) => {
  const { _condition, _else, _list, _item, children, ...rest } = props;
  if (_condition !== undefined) {
    return (
      <If _condition={_condition} _else={_else} {...rest}>
        {children}
      </If>
    );
  } else if (_list !== undefined) {
    return <For _list={_list} _item={_item} {...rest} />;
  }
  return <StyledView {...rest}>{children}</StyledView>;
});

// export default memo(forwardRef(View));
