import { StyleSheet } from "react-native";
import { initialTheme } from "./themeContext";
import { IColors } from "./types";
import { IStyled } from "./types/style";

const margins = (props: IStyled) => ({
  marginTop: props?.mt || props?.marginTop || props?.my || 0,
  marginBottom: props?.mb || props?.marginBottom || props?.my || 0,
  marginLeft: props?.ml || props?.marginLeft || props?.mx || 0,
  marginRight: props?.mr || props?.marginRight || props?.mx || 0,
});
const paddings = (props: IStyled) => ({
  paddingTop: props?.pt || props?.paddingTop || props?.py || 0,
  paddingBottom: props?.pb || props?.paddingBottom || props?.py || 0,
  paddingLeft: props?.pl || props?.paddingLeft || props?.px || 0,
  paddingRight: props?.pr || props?.paddingRight || props?.px || 0,
});

const flex = (props: IStyled) => ({
  alignItems: props.align || props.alignItems || "flex-start",
  justify: props.justify || props.justifyContent || "flex-start",
});

interface IProps extends IStyled {
  theme: IColors;
}

export const styles = (props: IProps) => {
  return StyleSheet.create<{ box: IStyled }>({
    box: {
      ...props,
      backgroundColor:
        props.theme[props?.bg as keyof typeof initialTheme] ||
        props?.bg ||
        props.backgroundColor ||
        "#ffffff",
      borderWidth: props?.border || props.borderWidth || 0,
      ...margins(props),
      ...paddings(props),
      ...flex(props),
    },
  });
};
