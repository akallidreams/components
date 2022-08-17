import { StatusBar } from "expo-status-bar";
import {
  Center,
  If,
  ScrollView,
  StyledView,
  View,
} from "./src/components/View";
import { Header } from "./src/components/Header";
import { Text, Truncated } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { ThemeProvider } from "styled-components";
import { Button, ButtonIcon } from "./src/components/Button";
import { Input } from "./src/components/Input";
import { useForm } from "./src/hooks/useForm";
import { useState } from "react";
import { ITheme } from "./src";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(5, "put at least 5 letters")
    .required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
});

export default function App() {
  // const [count, setCounter] = useState(0);
  // const handlePress = () => {
  //   setCounter(count + 1);
  // };
  const { register, errors } = useForm({ schema });
  //console.log(errors);
  return (
    <ThemeProvider theme={initialTheme}>
      {/* <ScrollView>
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
      <View _condition={7 < 2} _else={() => <Text>rodas</Text>} mt="20px">
        <Text color="primary">agora o text aqui</Text>
      </View>
      <Truncated length={10}>{count}</Truncated>
      <Truncated length={10}>VAZIO</Truncated>
      <Button onPress={handlePress}>
        <Text>Add</Text>
      </Button> */}
      {/* <View _style={styles.container}>
        <Text _style={styles.textStyle}>oi</Text>
      </View>
      <Center _style={styles.center} _variant="button">
        <Truncated
          _length={10}
          _style={`
           background: purple; 
           color: white;
        `}
        >
          testing a string with 10 items or more
        </Truncated>
      </Center> */}
      <Input _register={register} _label="name" />
      <Input _register={register} _label="email" />
    </ThemeProvider>
  );
}

const styles = {
  container: `
    background-color: ${initialTheme.colors.secondary};
    width: 100px;
    color: white;
  `,
  center: `
    width: 100px;
  `,
  textStyle: `
    color: ${initialTheme.colors.success};
    font-size: 20px;
  `,
};
