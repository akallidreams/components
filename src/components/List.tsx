import { IView } from "./View/View";
import { makeStyledComponent } from "../helpers/styles";
import {
  SectionListProps,
  ScrollViewProps,
  FlatListProps,
  FlatList as RNFlatList,
  SectionList as RNSectionList,
} from "react-native";
import { forwardRef, memo } from "react";
import { IMakeStyledComponent, ITheme } from "../helpers/types";

interface IFlatList extends ScrollViewProps, FlatListProps<any>, IView {}

interface ISectionList extends SectionListProps<any>, IView {}

export const FlatList = memo(
  forwardRef((props: IFlatList, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _style,
        _variant,
      },
      RNFlatList
    );
    return (
      <RenderComponent {...rest} ref={ref}>
        {children}
      </RenderComponent>
    );
  })
);

export const SectionList = memo(
  forwardRef((props: ISectionList, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _style,
        _variant,
      },
      RNSectionList
    );
    return (
      <RenderComponent {...rest} ref={ref}>
        {children}
      </RenderComponent>
    );
  })
);
