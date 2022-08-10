import { color, layout, space } from "styled-system";
import styled from "styled-components/native";
import { themedBG, themedFontSize } from "../helpers/styles";
import { IView, View } from "./View";
import React, { memo } from "react";
import { initialTheme } from "../helpers";
import { ButtonProps } from "react-native";

interface IButton extends IView, ButtonProps {}

const baseButtonStyle = `
  background-color: ${initialTheme.colors.grey};
  border-radius: 5px;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Button = memo(styled.Pressable<IButton>`
  ${baseButtonStyle}
  ${color}
  ${space}
  ${layout}
  ${themedBG as any}
  ${themedFontSize as any}
`);

export const ButtonGhost = memo(styled(Button)`
  background-color: transparent;
  border-width: 0px;
`);

interface IButtonIcon extends IButton {
  _iconLeft?: React.ElementType;
  _iconRight?: React.ElementType;
  _spacing?: string;
}

export const ButtonIcon = memo((props: IButtonIcon) => {
  const { _iconLeft, _iconRight, children, _spacing, ...buttonProps } = props;
  return (
    <Button {...buttonProps}>
      {_iconRight ? (
        <>
          <View ml={_spacing || "10px"}>{children}</View>
          <_iconRight />
        </>
      ) : _iconLeft ? (
        <>
          <_iconLeft />
          <View mr={_spacing || "10px"}>{children}</View>
        </>
      ) : null}
    </Button>
  );
});
