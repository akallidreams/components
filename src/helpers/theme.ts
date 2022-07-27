import { LinearGradient } from "expo-linear-gradient";
import { IExtendThemeConfig, IColors } from "./types";
import * as Font from "expo-font";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

const colors = (c: IColors) => ({
  primary: c.primary || "blue",
  secondary: c.secondary || "black",
  grey: c.grey || "grey",
  greyLight: c.greyLight || "#cccccc",
  greyDark: c.greyDark || "#424242",
  white: c.white || "white",
  extra: c.extra || {},
});

const extendThemeConfig = (params: IExtendThemeConfig) => ({
  colors: colors(params.colors),
  components: params.variants || {},
  fontConfig: params.fonts.config,
  fonts: {
    main: params.fonts.main,
  },
});

const fetchFonts = (fonts: any) => {
  return Font.loadAsync(fonts);
};

export const themeConfig = {
  config,
  extendThemeConfig,
  fetchFonts,
};
