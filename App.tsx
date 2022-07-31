import { StatusBar } from "expo-status-bar";
import { StyleSheet, View as RNView } from "react-native";
import { Center } from "./src/components/View";
import { Bold, Text, Highlighted } from "./src/components/Text";
import { AkalliProvider, initialTheme } from "./src/helpers/themeContext";
import { ThemeProvider } from "styled-components";

// import { configure, getStorybookUI } from "@storybook/react-native";

// configure(() => {
//   // Since require.context doesn't exist in metro bundler world, we have to
//   // manually import files ending in *.stories.js
//   require("./.storybook/stories");
// }, module);

// export default getStorybookUI();

export default function App() {
  return (
    <ThemeProvider theme={initialTheme}>
      <Center bg="primary" p="4%">
        <Text fontSize="lg" bg="white" width="1px" color="primary" mt="200px">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </Center>
      <Bold>acho que nao</Bold>
    </ThemeProvider>
  );
}

const boxStyles = `
  marginTop: 5px
`;
