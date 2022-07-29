import { FlexStyle, ViewStyle } from "react-native";
import { initialTheme } from "../themeContext";
import { IColors } from "../types";

export interface IStyleSpacing {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
}

export interface IStyleFlex {
  justify?: FlexStyle["justifyContent"];
  align?: FlexStyle["alignItems"];
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type IColor = RGB | RGBA | HEX;

export interface IStyled extends ViewStyle, IStyleSpacing, IStyleFlex {
  bg?: IColor | keyof typeof initialTheme;
  border?: FlexStyle["borderWidth"];
}
