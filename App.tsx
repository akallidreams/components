import { StatusBar } from "expo-status-bar";
import { Center, ScrollView } from "./src/components/View";
import { Header } from "./src/components/Header";
import { Text, Truncated } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { ThemeProvider } from "styled-components";
import { Button, ButtonIcon } from "./src/components/Button";
import { InputLength, InputEmail } from "./src/components/Input";
import { useForm } from "react-hook-form";
import { FlatList, SectionList } from "./src/components/List";

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
      <ScrollView>
        <Center bg="primary" p="4%">
          <Text fontSize="lg" bg="white" color="primary" mt="200px">
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
        <InputLength
          control={control}
          errors={errors}
          schema={{
            label: "meuinput",
            maxLength: 5,
            maxLengthMessage: "atingiu meu limite",
            requiredMessage: "campo obrigatorio",
            color: "primary",
          }}
        />
        <InputLength
          control={control}
          errors={errors}
          schema={{
            label: "meu input 2",
            minLength: 5,
            minLengthMessage: "n e o suficiente",
            requiredMessage: "campo obrigatorio",
            color: "success",
          }}
        />
        <InputEmail
          control={control}
          errors={errors}
          schema={{
            label: "email",
            requiredMessage: "campo obrigatorio",
            invalidEmailMessage: "Email invalido",
            color: "success",
          }}
        />
        <Button onPress={handleSubmit(() => {})}>
          <Text>clique me</Text>
        </Button>
        <Header
          height="600px"
          bg="primary"
          icon="close"
          color="white"
          action={() => {
            console.log("ola amigo");
          }}
        >
          <Text color="success" fontSize="lg">
            meu texto
          </Text>
        </Header>
      </ScrollView>
    </ThemeProvider>
  );
}
