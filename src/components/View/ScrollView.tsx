import { StyledComponent } from "styled-components";
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native";
import { DefaultTheme, useTheme } from "styled-components/native";
import { memo } from "react";
import { IView } from "./View";
import { ITheme } from "../../helpers/types";
import { makeStyledComponent } from "../../helpers/styles";

interface IScrollView extends ScrollViewProps, IView {}

export type IStyledScrollViewBase = StyledComponent<
  typeof RNScrollView,
  DefaultTheme,
  {},
  never
>;

export const ScrollView = memo((props: IView) => {
  const { _style, _variant, children, ...rest } = props;
  const theme: ITheme = useTheme() as ITheme;
  const RenderComponent: IStyledScrollViewBase = makeStyledComponent(
    {
      _style,
      _variant,
      theme,
    },
    RNScrollView
  );
  return <RenderComponent {...rest}>{children}</RenderComponent>;
});
