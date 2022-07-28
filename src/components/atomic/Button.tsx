import React, { forwardRef, memo, useEffect, useState } from "react";
import { StyleSheet, Pressable, ViewStyle } from "react-native";

type PressEvent = any; // TODO: research where this can come from

interface IProps extends ViewStyle {
  children: React.ElementType;
  delayLongPress: number;
  disabled: boolean;
  onLongPress: (nativeEvent: PressEvent) => void;
  onPress: (nativeEvent: PressEvent) => void;
  onPressIn: (nativeEvent: PressEvent) => void;
  onPressOut: (nativeEvent: PressEvent) => void;
}

const handleStyle = (props: IProps) => {
  const style = Object.assign(props);
  delete style.children;
  delete style.onPress;
  delete style.onPressOut;
  delete style.onLongPress;
  delete style.onPressIn;
  return style;
};

const handlePresses = (props: IProps) => {
  const pressProps = {
    onPress: props.onPress,
    onPressOut: props.onPressOut,
    onLongPress: props.onLongPress,
    onPressIn: props.onPressIn,
  };
  return pressProps;
};

const Button = (props: IProps) => {
  const [style, setStyle] = useState({});
  const [presses, setPresses] = useState({});
  useEffect(() => {
    setStyle(handleStyle(props));
    setPresses(handlePresses(props));
  });
  return (
    <Pressable {...presses} style={styles(style).button}>
      {props.children}
    </Pressable>
  );
};

const styles = (props: ViewStyle) =>
  StyleSheet.create<{ button: ViewStyle }>({
    button: {
      flexDirection: "row",
      ...props,
    },
  });

export default memo(forwardRef(Button));
