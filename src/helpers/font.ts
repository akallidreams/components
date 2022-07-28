import { IFSize } from "./types";

export const main = {
  fontFamily: "main",
  fontWeight: "default",
};

export const fonts = {
  mainLight: {
    ...main,
    fontStyle: "light",
  },
  mainNormal: {
    ...main,
    fontStyle: "normal",
  },
  mainBold: {
    ...main,
    fontStyle: "bold",
  },
};

export const defaultFSizes: IFSize = {
  xl: {
    fontSize: "26px",
  },
  lg: {
    fontSize: "20px",
  },
  md: {
    fontSize: "14px",
  },
  sm: {
    fontSize: "11px",
  },
};
