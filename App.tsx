import { StatusBar } from "expo-status-bar";
import { StyleSheet, View as RNView } from "react-native";
import { Center } from "./src/components/View";
import { Bold, Text, Truncated } from "./src/components/Text";
import { AkalliProvider, initialTheme } from "./src/helpers/themeContext";
import { ThemeProvider } from "styled-components";
import { Button, ButtonIcon } from "./src/components/Button";
import { InputMaxLength } from "./src/components/Input";
import { schemas } from "./src/helpers";
import { useForm } from "react-hook-form";

// import { configure, getStorybookUI } from "@storybook/react-native";

// configure(() => {
//   // Since require.context doesn't exist in metro bundler world, we have to
//   // manually import files ending in *.stories.js
//   require("./.storybook/stories");
// }, module);

// export default getStorybookUI();

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ThemeProvider theme={initialTheme}>
      <Center bg="primary" p="4%">
        <Text fontSize="lg" bg="white" width="1px" color="primary" mt="200px">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </Center>
      <Truncated length={10}>
        acho que nao Open up App.tsx to start working on your app!
      </Truncated>
      <ButtonIcon IconLeft={() => <Text>ICONE</Text>} bg="primary">
        <Text color="white">clique em mim</Text>
      </ButtonIcon>
      <InputMaxLength
        control={control}
        errors={errors}
        schema={{
          label: "meu input",
          maxLength: 5,
          maxLengthMessage: "atingiu meu limite",
          requiredMessage: "campo obrigatorio",
        }}
      />
    </ThemeProvider>
  );
}

const boxStyles = `
  marginTop: 5px
`;
