import { color, layout, space } from "styled-system";
import styled from "styled-components/native";
import { themedBG, themedFontSize } from "../helpers/styles";
import { IView, View } from "./View";
import React from "react";
import { initialTheme } from "../helpers";

interface IButton extends IView {}

const baseButtonStyle = `
  background-color: ${initialTheme.colors.grey};
  border-radius: 5px;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.Pressable<IButton>`
  ${baseButtonStyle}
  ${color}
  ${space}
  ${layout}
  ${themedBG as any}
  ${themedFontSize as any}
`;

export const ButtonGhost = styled(Button)`
  background-color: transparent;
  border-width: 0px;
`;

interface IButtonIcon extends IButton {
  IconLeft?: React.ElementType;
  IconRight?: React.ElementType;
  spacing?: string;
}

export const ButtonIcon = (props: IButtonIcon) => {
  const { IconLeft, IconRight, children, right, spacing, ...buttonProps } =
    props;
  return (
    <Button {...buttonProps}>
      {IconRight ? (
        <>
          <IconRight />
          <View ml={spacing || "10px"}>{children}</View>
        </>
      ) : IconLeft ? (
        <>
          <View mr={spacing || "10px"}>{children}</View>
          <IconLeft />
        </>
      ) : null}
    </Button>
  );
};
