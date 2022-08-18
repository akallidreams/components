import { Header } from "./src/components/Header";
import { Text } from "./src/components/Text";
import { initialTheme } from "./src/helpers";
import { Input } from "./src/components/Input";
import { useForm } from "./src/hooks/useForm";
import * as yup from "yup";
import { BackIcon } from "./src/components/Icons";
import { MyThemeProvider } from "./src/hooks";
import { ButtonIcon } from "./src";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(5, "put at least 5 letters")
    .required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
});

export default function App() {
  const { register, handleSubmitForm } = useForm({ schema });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <MyThemeProvider value={initialTheme}>
      <Input
        _register={register}
        _label="name"
        _placeholder="seu nome"
        _customStyles={{
          label: "font-size: 25px",
          NativeTextInput: { fontSize: 25 },
        }}
        _colors={{
          main: "#7a7a7a",
          error: "red",
        }}
      />
      <Input _register={register} _label="email" />
      <ButtonIcon
        onPress={() => handleSubmitForm(handleSubmit)}
        _iconLeft={() => <BackIcon size={14} color="secondary" />}
      >
        <Text _style="color: red">clique me</Text>
      </ButtonIcon>
      <Header _onPressIcon={() => {}} bg="#4287f5">
        <Text>meu texto</Text>
      </Header>
    </MyThemeProvider>
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
