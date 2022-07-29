import { LinearGradient } from "expo-linear-gradient";
import { IExtendThemeConfig, IFontSources } from "./types";
import { colors } from "./colors";
import { nativeBaseComponents } from "./components";
import { main } from "./font";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

// TODO: make web version with Pressable and mirror behaviors on the web

const extendThemeConfig = (params: IExtendThemeConfig) => ({
  colors: colors(params.colors),
  components: nativeBaseComponents({
    variants: params.variants,
    fSize: params.fontSizes,
    baseColor: params.colors.greyLight,
  }),
  fontConfig: {},
  fonts: {
    main: main,
  },
});

export const themeConfig = {
  config,
  extendThemeConfig,
};
