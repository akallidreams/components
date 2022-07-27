import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { configure, getStorybookUI } from "@storybook/react-native";

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require("./.storybook/stories");
}, module);

export default getStorybookUI();

export function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
