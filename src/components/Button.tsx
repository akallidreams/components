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
    const extraPropsBase = `
      align-items: center; 
      justify-content: center; 
      ${_extraProps}
    `;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _extraProps: extraPropsBase,
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
          <View
            _style={`
              flex-direction: row;
              align-items: center;
              justify-content: center;
          `}
          >
            <View _style={`margin-right: ${_spacing || "10px"}`}>
              {children}
            </View>

            <_iconRight />
          </View>
        ) : _iconLeft ? (
          <View
            _style={`
              flex-direction: row;
              align-items: center;
              justify-content: center;
          `}
          >
            <_iconLeft />
            <View _style={`margin-left: ${_spacing || "10px"};`}>
              {children}
            </View>
          </View>
        ) : null}
      </Button>
    );
  })
);
