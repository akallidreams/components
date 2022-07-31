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
