import React, { forwardRef, memo, useContext } from "react";
import { FlexStyle, View } from "react-native";
import { styles } from "../../helpers/styles";
import { Theme } from "../../helpers/themeContext";
import { IStyled } from "../../helpers/types/style";

interface IProps extends IStyled {
  children: React.ReactNode;
  ref: any;
}

interface IDefaultStyle {
  flexDirection: FlexStyle["flexDirection"];
}

const defaultStyle: IDefaultStyle = {
  flexDirection: "row",
};

export const Box = (props: IProps) => {
  const theme = useContext(Theme);
  return (
    <View
      ref={props.ref}
      style={styles({ ...defaultStyle, ...props, theme }).box}
    >
      {props.children}
    </View>
  );
};

export default memo(forwardRef(Box));
