import React, { forwardRef, memo, useEffect, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps extends ViewStyle {
  children: React.ElementType;
}

const handleStyle = (props: IProps) => {
  const style = Object.assign(props);
  delete style.children;
  return style;
};

const VStack = (props: IProps) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle(handleStyle(props));
  });
  return <View style={styles(style).vStack}>{props.children}</View>;
};

const styles = (props: ViewStyle) =>
  StyleSheet.create<{ vStack: ViewStyle }>({
    vStack: {
      flexDirection: "column",
      ...props,
    },
  });

export default memo(forwardRef(VStack));
