import { initialTheme } from "./initialTheme";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type IColor = RGB | RGBA | HEX;

export interface IColors {
  primary: IColor;
  secondary?: IColor;
  grey?: IColor;
  greyLight?: IColor;
  greyDark?: IColor;
  white?: IColor;
  success?: IColor;
  error?: IColor;
}

export interface IFontSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export interface IFontSources {
  [key: string]: any;
}

export interface IBase {
  label: string;
  type?: string;
  requiredMessage?: string;
  color?: IColor | keyof IColors;
  borderColor?: IColor | keyof IColors;
  rules?: any;
}

export interface IEmail extends IBase {
  invalidEmailMessage: string;
}

export interface ILength extends IBase {
  maxLength?: number;
  maxLengthMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
}

export interface ITheme {
  colors: IColors;
  fontSizes: IFontSizes;
}

export type IThemeColor = keyof IColors | keyof typeof initialTheme.colors;
