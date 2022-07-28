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

const Center = (props: IProps) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle(handleStyle(props));
  });
  return <View style={styles(style).center}>{props.children}</View>;
};

const styles = (props: ViewStyle) =>
  StyleSheet.create<{ center: ViewStyle }>({
    center: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      ...props,
    },
  });

export default memo(forwardRef(Center));
