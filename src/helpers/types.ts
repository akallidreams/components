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

export interface IBase {
  label: string;
  type?: string;
  requiredMessage: string;
  rules: {};
  color?: IColor;
  borderColor?: IColor;
}

export interface IEmail extends IBase {
  rules: {
    pattern: RegExp;
    message: string;
  };
}

export interface IMaxLength extends IBase {
  maxLength: number;
  maxLengthMessage: string;
}

export interface IMinLength extends IBase {
  minLength: number;
  minLengthMessage: string;
}

export interface IRepeatPassword extends ILength {
  handleSamePassword: () => boolean;
}
