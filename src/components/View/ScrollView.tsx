import { StyledComponent } from "styled-components";
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native";
import { DefaultTheme } from "styled-components/native";
import { forwardRef, memo, Ref } from "react";
import { IView } from "./View";
import { ITheme } from "../../helpers/types";
import { makeStyledComponent } from "../../helpers/makeStyledComponent";
import { useMyStyledComponent } from "../../hooks";

interface IScrollView extends ScrollViewProps, IView {}

export type IStyledScrollViewBase = StyledComponent<
  typeof RNScrollView,
  DefaultTheme,
  {},
  never
>;

export const ScrollView = memo(
  forwardRef((props: IView, ref: Ref<RNScrollView> | undefined) => {
    const { _style, _variant, children, ...rest } = props;
    const { MyStyledComponent } = useMyStyledComponent(
      {
        _style,
        _variant,
      },
      RNScrollView
    );

    return (
      <MyStyledComponent {...rest} ref={ref}>
        {children}
      </MyStyledComponent>
    );
  })
);
