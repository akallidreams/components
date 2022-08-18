import React, { forwardRef, memo, useEffect, useState } from "react";
import { TextProps, Text as RNText } from "react-native";
import { IMakeStyledComponent } from "../helpers/types";
import { makeStyledComponent } from "../helpers/styles";

interface IText extends TextProps {
  _style?: string;
  _variant?: string;
  _extraProps?: string;
}

interface ITruncated extends IText {
  _length: number;
}

const extraProps = {
  bold: "font-weight: bold",
  italic: "font-style: italic",
};

// FIXME: can't use forwardRef on Text component
export const Text = memo((props: IText) => {
  const { _style, _variant, _extraProps, children, ...rest } = props;
  const RenderComponent: IMakeStyledComponent = makeStyledComponent(
    {
      _extraProps,
      _style,
      _variant,
    },
    RNText
  );
  return <RenderComponent {...rest}>{children}</RenderComponent>;
});

export const Bold = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <Text _extraProps={extraProps.bold} {...rest} ref={ref}>
        {children}
      </Text>
    );
  })
);

export const Italic = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <Text _extraProps={extraProps.italic} {...rest} ref={ref}>
        {children}
      </Text>
    );
  })
);

export const Truncated = memo(
  forwardRef((props: ITruncated, ref) => {
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
    return (
      <Text {...textProps} ref={ref}>
        {text}
      </Text>
    );
  })
);

// export default memo(forwardRef(Text));
