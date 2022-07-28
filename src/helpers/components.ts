import { defaultFSizes, fonts } from "./font";
import { INativeBaseComponents } from "./types";

const buttonBaseStyle = {
  width: "full",
  height: "40px",
  fontFamily: "body",
  fontWeight: "600",
  fontStyle: "italic",
  pr: "10px",
  pl: "10px",
  pt: "5px",
  pb: "5px",
};

export const nativeBaseComponents = ({
  variants,
  fSize,
  baseColor = "#C5C5C5",
}: INativeBaseComponents) => ({
  Text: {
    sizes: fSize || defaultFSizes,
    variants: {
      primary: () => ({
        ...fonts.mainLight,
        color: baseColor,
        fontSize: fSize?.md?.fontSize || "14px",
      }),
      heading: () => ({
        ...fonts.mainLight,
        fontSize: fSize?.xl?.fontSize || "26px",
        color: baseColor,
      }),
      ...variants.text,
    },
  },
  Button: {
    variants: {
      primary: ({ colorScheme }: { colorScheme: string }) => ({
        ...buttonBaseStyle,
        bg: `${colorScheme}` || baseColor,
      }),
      rounded: ({ colorScheme }: { colorScheme: string }) => ({
        ...buttonBaseStyle,
        bg: `${colorScheme}` || baseColor,
        borderRadius: "20px",
        rounded: "full",
      }),
      ...variants.button,
    },
  },
  Input: {
    variants: {
      search: () => ({
        placeholder: "Pesquisar ativos",
        maxW: "full",
        flex: "1",
        borderWidth: "1px",
        placeholderTextColor: baseColor,
        borderRadius: "6px",
        py: "3px",
        px: "1px",
        border: "1px",
        borderColor: baseColor,
        h: "40px",
        color: baseColor,
      }),
      ...variants.input,
    },
  },
  ...variants.extra,
});
