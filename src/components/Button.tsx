import { color, ColorProps, layout, space } from "styled-system";
import styled, { useTheme } from "styled-components/native";
import { makeStyledComponent } from "../helpers/styles";
import { IView, View } from "./View/View";
import React, { forwardRef, memo } from "react";
import { initialTheme } from "../helpers";
import { PressableProps, Pressable as RNPressable } from "react-native";
import { IMakeStyledComponent, ITheme } from "../helpers/types";

interface IButton extends IView, PressableProps {
  color?: string;
  children?: React.ElementType | React.ReactNode;
  hitSlop?: any;
  style?: any;
}

const extraProps = {
  defaultButton: `
    background-color: ${initialTheme.colors.grey};
    border-radius: 5px;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    align-items: center;
    padding: 10px; 
  `,
  pressable: `
    background-color: transparent;
    border-width: 0px;
  `,
};

export const Button = memo(
  forwardRef((props: IButton, ref) => {
    const {
      _style,
      _variant,
      children,
      _extraProps = extraProps.defaultButton,
      ...rest
    } = props;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _extraProps,
        _style,
        _variant,
      },
      RNPressable
    );
    return (
      <RenderComponent {...rest} ref={ref}>
        {children}
      </RenderComponent>
    );
  })
);

export const Pressable = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <Button {...rest} ref={ref} _extraProps={extraProps.pressable}>
        {children}
      </Button>
    );
  })
);

interface IButtonIcon extends IButton {
  _iconLeft?: React.ElementType;
  _iconRight?: React.ElementType;
  _spacing?: string;
  bg?: string;
  title?: string;
}

export const ButtonIcon = memo(
  forwardRef((props: IButtonIcon | any, ref) => {
    const { _iconLeft, _iconRight, children, _spacing, ...buttonProps } = props;
    return (
      <Button {...buttonProps} ref={ref}>
        {_iconRight ? (
          <>
            <View _style={` margin-right: ${_spacing || "10px"}`}>
              {children}
            </View>
            <_iconRight />
          </>
        ) : _iconLeft ? (
          <>
            <_iconLeft />
            <View _style={` margin-left: ${_spacing || "10px"}`}>
              {children}
            </View>
          </>
        ) : null}
      </Button>
    );
  })
);
