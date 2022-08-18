# Overview

This library is part of a larger framework with many solutions that you can access at [here](https://github.com/akallidreams/create-akalli-app). All the modules are independent so you can use it without the other ones but we recommend give it a try due the fact they make much easier to implement the features navigation[(@akalli/navigation)](https://github.com/akallidreams/navigation), global state[(@akalli/state)](https://github.com/akallidreams/state), smart components[(@akalli/components)](https://github.com/akallidreams/components) and icons[(@akalli/icons)](https://github.com/akallidreams/icons).

# Quick start

## Instalation

`npm install @akalli/components styled-components react-native-svg yup`

### Example:

```tsx
import { Text, View } from "@akalli/components";

export const Component = memo((props: IPropsHeader) => {
  return (
    <View _style={styles.view}>
      <Text _style={styles.text}>My text here</Text>
      <Text _style="color: blue;">Inline styles support too!</Text>
    </View>
  );
});

const styles = {
  view: `
    height: 100px;
    background-color: red;
    width: 100%;
  `,
  text: `
    color: white;
    font-size: 24px;
  `,
};
```

> Our special props are found when you type "\_", anything else will be regular props from react-native.

### Theming and variants

```tsx
import { MyThemeProvider, Text, useMyTheme, Center } from "@akalli/components";

export const App = () => {
  return (
    <MyThemeProvider value={MyCustomTheme}>
      <Component />
    </MyThemeProvider>
  );
};

export const Component = () => {
  const { colors } = useMyTheme();
  return (
    <Center variant="myVariant">
      <Text
        _style={`
        color: ${color.primary};
        font-size: 20px;
      `}
      >
        My primary text
      </Text>
    </Center>
  );
};
```

### Dinamic styling without been inline

```tsx
export const Component = () => {
  const { colors } = useMyTheme();
  const { textStyle } = styles({ color: "red" });
  return (
    <Center variant="myVariant">
      <Text _style={textStyle}>My dinamic text</Text>
    </Center>
  );
};

const styles = (props) => ({
  textStyle: `
    color: ${props.color};
    font-size: 14px;
  `,
});
```

## Custom theme schema

> Experiment, do anything here.

```ts
export const MyCustomTheme: ITheme = {
  colors: {
    primary: "#261665",
    secondary: "#6A59AA",
    grey: "#ACACAC",
    greyLight: "#C5C5C5",
    greyDark: "#464646",
    error: "#FF6347",
    success: "#9cffb6",
    white: "#FFFFFF",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
  },
  variants: {
    myVariant: `
      background-color: red;
      height: 150px;
      ...
    `
  }
  ...
};
```

## useForm with yup for form validations

```tsx
import * as yup from "yup";
import { Input, useForm, Button } from "@akalli/components";

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
    <>
      <Input
        _register={register}
        _label="name"
        _placeholder="seu nome"
        _colors={{
          main: "grey",
          error: "red",
        }}
      />
      <Input _register={register} _label="email" />
      <Button onPress={() => handleSubmitForm(handleSubmit)}>
        Submit form
      </Button>
    </>
  );
}
```

# Contribute

## Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

## Dependencies of package.json

```json
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "expo": "~45.0.0",
    "expo-linear-gradient": "~11.3.0",
    "expo-status-bar": "~1.3.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-gesture-handler": "~2.2.1",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-svg": "12.3.0",
    "react-native-web": "0.17.7",
    "styled-components": "^5.3.5",
    "yup": "^0.32.11"
```
