export interface IColors {
  primary: string;
  secondary?: string;
  grey?: string;
  greyLight?: string;
  greyDark?: string;
  white?: string;
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
