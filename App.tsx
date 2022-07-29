import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./src/components/container/Box";
import { AkalliProvider } from "./src/helpers/themeContext";

// import { configure, getStorybookUI } from "@storybook/react-native";

// configure(() => {
//   // Since require.context doesn't exist in metro bundler world, we have to
//   // manually import files ending in *.stories.js
//   require("./.storybook/stories");
// }, module);

// export default getStorybookUI();

export default function App() {
  return (
    <AkalliProvider value={{ primary: "red" }}>
      <View>
        <Box mt={100} pb={10} py={40} bg="primary">
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </Box>
      </View>
    </AkalliProvider>
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
