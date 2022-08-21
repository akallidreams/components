import { Header } from "./src/components/Header";
import { Text } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { Input } from "./src/components/Input";
import * as yup from "yup";
import { BackIcon } from "./src/components/Icons";
import { MyThemeProvider, useMyStyle, useMyForm } from "./src/hooks";
import { ButtonIcon, IColor } from "./src";
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

  const buttonStyle = useMyStyle(buttonCustomStyle(color), [color]);

  return (
    <MyThemeProvider theme={initialTheme}>
      <Input
        _register={register}
        _key="name"
        _label="name"
        _placeholder="seu nome"
        _customStyles={{
          label: "font-size: 25px",
          input: "font-size: 25px",
          container: "margin-top: 20px",
        }}
        _colors={{
          main: "#7a7a7a",
          error: "#f5427b",
        }}
      />
      <Input
        _variant="myInput"
        _placeholder="seu email"
        _register={register}
        _label="email"
        _key="email"
      />
      <ButtonIcon
        onPress={() => handleSubmitForm(handleSubmit)}
        _iconLeft={() => <BackIcon size={14} color="success" />}
        _style={buttonStyle}
      >
        <Text _style={styles.container}>clique me</Text>
      </ButtonIcon>
      <Header _onPressIcon={() => {}} bg="#4287f5">
        <Text>meu texto</Text>
      </Header>
    </MyThemeProvider>
  );
}

const buttonCustomStyle = (color: IColor) => `
  background-color: ${color};
`;

const styles = {
  container: `
    width: 100px;
    color: white;
  `,
  center: `
    width: 100px;
  `,
  textStyle: `
    color: red;
    font-size: 20px;
  `,
  input: `
    margin-top: 20px;
  `,
};
