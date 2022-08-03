# Quick start

This library is part of a larger framework with many solutions that you can access at www.akalli-framework.com. All the modules are independent so you can use it without the other ones but we recommend give it a try due the fact they make much easier to implement the features navigation(@akalli/navigation), global state(@akalli/state) and icons(@akalli/icons) this last one is included here.

you can easily access all modules in our expo template... $$$$$$$

## Instalation

`npm install @akalli/components styled-components styled-system react-native-svg @akalli/icons react-hook-form`

Example:

```tsx
import { HSection, Text } from "@akalli/components";

export const MyComponent = () => {
  return (
    <HSection bg="secondary" mt="10px">
      <Text color="grey" fontSize="lg">
        My text
      </Text>
      <Text color="primary" fontSize="14px">
        My text
      </Text>
    </HSection>
  );
};
```

## Configuration

```tsx
import { ThemeProvider } from "styled-components";
<ThemeProvider theme={MyCustomTheme}>
  <App />
</ThemeProvider>;
```

## Custom theme schema

> Example

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
};
```

# Contribute

## Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

## Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

## Dependencies of package.json

```json
   "@akalli/icons": "^0.0.6",
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "expo": "~45.0.0",
    "expo-linear-gradient": "~11.3.0",
    "expo-status-bar": "~1.3.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-hook-form": "^7.26.0",
    "react-native": "0.68.2",
    "react-native-gesture-handler": "~2.2.1",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-svg": "12.3.0",
    "react-native-web": "0.17.7",
    "styled-components": "^5.3.5",
    "styled-system": "^5.1.5"
```
