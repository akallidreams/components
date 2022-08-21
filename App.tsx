import { Header } from "./src/components/Header";
import { Text } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { Input } from "./src/components/Input";
import * as yup from "yup";
import { BackIcon } from "./src/components/Icons";
import { MyThemeProvider, useMyStyle, useMyForm } from "./src/hooks";
import { Button, ButtonIcon, Center, FlatList, IColor, View } from "./src";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(5, "put at least 5 letters")
    .required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
});

export default function App() {
  const { register, handleSubmitForm } = useMyForm({ schema });
  const [color, setColor] = useState<IColor>("#f5427b");

  const handleSubmit = (data: any) => {
    console.log(data);
    setColor("#32a852");
  };

  // const buttonStyle = useMyStyle(buttonCustomStyle(color), [color]);

  const myList = [
    { name: "Wiry", email: "wiry@gmail.com" },
    { name: "Jes", email: "jes@gmail.com" },
    { name: "Dan", email: "dan@gmail.com" },
  ];

  return (
    <MyThemeProvider theme={initialTheme}>
      <Header
        _onPressIcon={() => {}}
        bg="#202C5D"
        height="160px"
        _icon="close"
        _iconColor="white"
      >
        <Center>
          <Text _style="color: white; font-size: 20px;">Meu titulo</Text>
          <Text _style="color: white; font-size: 15px;">Meu subtitulo</Text>
        </Center>
      </Header>
      <View _style="padding: 15px; height: 100%;  ">
        <Input
          _variant="inputForm"
          _register={register}
          _key="name"
          _label="Name"
          _placeholder="Seu nome"
          _customStyles={styles.inputDataClient}
          _colors={{
            main: "#7a7a7a",
            error: "#f5427b",
          }}
        />
        <Input
          _variant="inputForm"
          _placeholder="Seu email"
          _register={register}
          _label="Email"
          _key="email"
          _customStyles={styles.inputDataClient}
          _colors={{
            main: "#7a7a7a",
            error: "#f5427b",
          }}
        />
        <Button
          onPress={() => handleSubmitForm(handleSubmit)}
          _style={styles.buttonAddDataClients}
        >
          <Text _style="color: white;">Clique me</Text>
        </Button>
        <FlatList
          data={myList}
          renderItem={({ item }) => (
            <Center _style="margin-top: 30px; border: 1px; border-radius: 10px; background-color: #F4F5F7">
              <Text _style={styles.clientList}>Nome: {item.name}</Text>
              <Text _style={styles.clientList}>Email: {item.email}</Text>
            </Center>
          )}
        ></FlatList>
      </View>
    </MyThemeProvider>
  );
}

const buttonCustomStyle = (color: IColor) => `
  background-color: ${color};
`;

const styles = {
  buttonAddDataClients: `
    background-color: #202C5D; 
    width: 250px;
    margin-top: 20px;
  `,
  clientList: `
    color: #7a7a7a; 
    font-size: 15px;
    padding: 4px;
  `,
  inputDataClient: {
    label: `
      font-size: 20px; 
      text-align: left;
      
    `,
    input: `
      font-size: 18px; 
      padding-left: 15px; 
      height: 40px;
      border-radius: 8px;
      color: #A7A7A8;
    `,
    container: `
      margin-top: 20px; 
      align-items: flex-start;
    `,
  },
};
