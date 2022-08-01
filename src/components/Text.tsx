import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import styled from "styled-components/native";
import { themedBG, themedColor, themedFontSize } from "../helpers/styles";
import React, { useEffect, useState } from "react";

interface IText extends ColorProps, SpaceProps, TypographyProps {
  children: string;
}

interface ITruncated extends IText {
  length: number;
}

export const Text = styled.Text<IText>`
  ${color}
  ${space}
  ${typography}
  ${themedColor}
  ${themedFontSize}
  ${themedBG}
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
