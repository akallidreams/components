import {
  color,
  ColorProps,
  space,
  border,
  BorderProps,
  SpaceProps,
  typography,
  layout,
  position,
  TypographyProps,
  LayoutProps,
  PositionProps,
} from "styled-system";
import styled from "styled-components/native";
import { themedBG, themedColor, themedFontSize } from "../helpers/styles";
import React, { memo, useEffect, useState } from "react";
import { TextProps } from "react-native";

interface IText
  extends TextProps,
    ColorProps,
    SpaceProps,
    TypographyProps,
    BorderProps,
    LayoutProps,
    PositionProps {
  accessibilityRole?: any; // for now we dont use AccessibilityRole type
}

interface ITruncated extends IText {
  length: number;
}

export const Text = memo(styled.Text<IText>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${position}
  ${typography}
  ${themedColor as any}
  ${themedFontSize as any}
  ${themedBG as any}
`);

export const Bold = memo(styled(Text)`
  font-weight: bold;
`);

export const Italic = memo(styled(Text)`
  font-style: italic;
`);

export const Truncated = memo((props: ITruncated) => {
  const [text, setText] = useState<ITruncated["children"]>(props.children);
  const { length, ...textProps } = props;
  useEffect(() => {
    if (Array.isArray(props.children)) {
      const actualLength = props.children.length;
      if (length < actualLength) {
        setText(`${props.children.slice(0, length)}...`);
      }
    } else {
      setText(props.children);
    }
  }, [props.children, length]);
  return <Text {...textProps}>{text}</Text>;
});

// export default memo(forwardRef(Text));
