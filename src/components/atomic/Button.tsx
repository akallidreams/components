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
  disable: boolean;
  testOnly_pressed: boolean;
  variant: string;
}

const handleStyle = (props: IProps) => {
  const style = Object.assign(props);
  delete style.children;
  delete style.onPress;
  delete style.onPressOut;
  delete style.onLongPress;
  delete style.onPressIn;
  delete style.android_disableSound;
  delete style.android_ripple;
  delete style.unstable_pressDelay;
  delete style.disabled;
  delete style.hitSlop;
  delete style.pressRetentionOffset;
  delete style.testOnly_pressed;
  return style;
};

const handlePresses = (props: IProps) => {
  const pressProps = {
    onPress: props.onPress,
    onPressOut: props.onPressOut,
    onLongPress: props.onLongPress,
    onPressIn: props.onPressIn,
    disable: props.disable,
    testOnly_pressed: props.testOnly_pressed,
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
