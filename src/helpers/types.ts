import { IColor } from "./types/style";

export interface IColors {
  primary: IColor;
  secondary?: IColor;
  grey?: IColor;
  greyLight?: IColor;
  greyDark?: IColor;
  white?: IColor;
  extra?: any;
}

export interface IVariants {
  Text: {
    variants: {
      primary: any;
      title: any;
    };
  };
  Button: {
    variants: {
      primary: any;
    };
  };
}

export interface IExtendThemeConfig {
  variants?: IVariants;
  colors: IColors;
  fontSizes?: IFSize;
}

export interface IFSize {
  xl?: {
    fontSize: string;
  };
  lg?: {
    fontSize: string;
  };
  md?: {
    fontSize: string;
  };
  sm?: {
    fontSize: string;
  };
}

export interface INativeBaseComponents {
  variants?: any;
  fSize?: IFSize;
  baseColor?: string | undefined;
}

export interface IFontSources {
  [key: string]: any;
}
