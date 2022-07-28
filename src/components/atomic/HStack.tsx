import { StyleSheet, View, ViewStyle } from "react-native";

export const HStack = (props: ViewStyle) => {
  return <View style={styles(props).hStack}></View>;
};

const styles = (props: ViewStyle) =>
  StyleSheet.create<{ hStack: ViewStyle }>({
    hStack: {
      flexDirection: "row",
      ...props,
    },
  });
