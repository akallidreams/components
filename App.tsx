import { StatusBar } from "expo-status-bar";
import { Center, If, ScrollView, View } from "./src/components/View";
import { Header } from "./src/components/Header";
import { Text, Truncated } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { ThemeProvider } from "styled-components";
import { Button, ButtonIcon } from "./src/components/Button";
import { InputLength, InputEmail } from "./src/components/Input";
import { useForm } from "react-hook-form";
import { FlatList, For, SectionList } from "./src/components/List";
import { Component } from "react";

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
          _control={control}
          _errors={errors}
          _schema={{
            label: "meuinput",
            maxLength: 5,
            maxLengthMessage: "atingiu meu limite",
            requiredMessage: "campo obrigatorio",
            color: "primary",
          }}
        />
        <InputLength
          _control={control}
          _errors={errors}
          _schema={{
            label: "meu input 2",
            minLength: 5,
            minLengthMessage: "n e o suficiente",
            requiredMessage: "campo obrigatorio",
            color: "success",
          }}
        />
        <InputEmail
          _control={control}
          _errors={errors}
          _schema={{
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
          _icon="close"
          color="white"
          _onPressIcon={() => {
            console.log("ola amigo");
          }}
        >
          <Text color="success" fontSize="lg">
            meu texto
          </Text>
        </Header>
      </ScrollView>
      <If mb="20px" _condition={true} _else={() => <Text>aqui</Text>}>
        <Text color="primary">Foi meu if</Text>
      </If>
      <For _list={[1, 2, 3]} _item={({ item, index }) => <Text>{item}</Text>} />
      <View _condition={7 < 2} _else={() => <Text>rodas</Text>}>
        <Text color="primary">agora o text aqui</Text>
      </View>
    </ThemeProvider>
  );
}
