import { ITheme } from "./types";

export const initialTheme: ITheme = {
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
    button: `
      background-color: pink;
      height: 200px;
    `,
    inputForm: `
      background-color: #F4F5F7;
    `,
  },
};
