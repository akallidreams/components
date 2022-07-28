import { StyleSheet, View, ViewStyle } from "react-native";

export const VStack = (props: ViewStyle) => {
  return <View style={styles(props).vStack}></View>;
};

const styles = (props: ViewStyle) =>
  StyleSheet.create<{ vStack: ViewStyle }>({
    vStack: {
      flexDirection: "column",
      ...props,
    },
  });
