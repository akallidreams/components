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
import React, { ReactNode, useEffect, useState } from "react";

interface IText
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    BorderProps,
    LayoutProps,
    PositionProps {
  children?: ReactNode | ReactNode[];
}

interface ITruncated extends IText {
  length: number;
}

export const Text = styled.Text<IText>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${position}
  ${typography}
  ${themedColor as any}
  ${themedFontSize as any}
  ${themedBG as any}
`;

export const Bold = styled(Text)`
  font-weight: bold;
`;

export const Italic = styled(Text)`
  font-style: italic;
`;

export const Truncated = (props: ITruncated) => {
  const [text, setText] = useState<ITruncated["children"]>(props.children);
  const { length, ...textProps } = props;
  useEffect(() => {
    const actualLength = props.children.length;
    if (length < actualLength) {
      setText(`${props.children.slice(0, length)}...`);
    }
  });
  return <Text {...textProps}>{text}</Text>;
};

// export default memo(forwardRef(Text));
