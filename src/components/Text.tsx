import styled, { useTheme } from "styled-components/native";
import React, { memo, useEffect, useState } from "react";
import { TextProps, Text as RNText } from "react-native";
import { IMakeStyledComponent, ITheme } from "../helpers/types";
import { makeStyledComponent } from "../helpers/styles";

interface IText extends TextProps {
  _style?: string;
  _variant?: string;
}

interface ITruncated extends IText {
  _length: number;
}

const extraProps = {
  bold: "font-weight: bold",
  italic: "font-style: italic",
};

export const Text = memo((props: IText) => {
  const { _style, _variant, children, ...rest } = props;
  const theme: ITheme = useTheme() as ITheme;
  const RenderComponent: IMakeStyledComponent = makeStyledComponent(
    {
      _style,
      _variant,
      theme,
    },
    RNText
  );
  return <RenderComponent {...rest}>{children}</RenderComponent>;
});

export const Bold = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <Text _extraProps={extraProps.bold} {...rest}>
      {children}
    </Text>
  );
});

export const Italic = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <Text _extraProps={extraProps.italic} {...rest}>
      {children}
    </Text>
  );
});

export const Truncated = memo((props: ITruncated) => {
  const [text, setText] = useState<ITruncated["children"]>(props.children);
  const { _length, ...textProps } = props;
  useEffect(() => {
    handleTruncate(props.children as string, _length);
  }, [props.children, _length]);

  const handleTruncate = (text: string, length: number) => {
    if (length < text.length) {
      setText(`${text.slice(0, length)}...`);
    } else {
      setText(text);
    }
  };
  return <Text {...textProps}>{text}</Text>;
});

// export default memo(forwardRef(Text));
