import { IView } from "./View/View";
import {
  SectionListProps,
  ScrollViewProps,
  FlatListProps,
  FlatList as RNFlatList,
  SectionList as RNSectionList,
} from "react-native";
import { forwardRef, memo } from "react";
import { useMyStyledComponent } from "../hooks";

interface IFlatList extends ScrollViewProps, FlatListProps<any>, IView {}

interface ISectionList extends SectionListProps<any>, IView {}

export const FlatList = memo(
  forwardRef((props: IFlatList, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const { MyStyledComponent } = useMyStyledComponent(
      {
        _style,
        _variant,
      },
      RNFlatList
    );
    return (
      <MyStyledComponent {...rest} ref={ref}>
        {children}
      </MyStyledComponent>
    );
  })
);

export const SectionList = memo(
  forwardRef((props: ISectionList, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const { MyStyledComponent } = useMyStyledComponent(
      {
        _style,
        _variant,
      },
      RNSectionList
    );
    return (
      <MyStyledComponent {...rest} ref={ref}>
        {children}
      </MyStyledComponent>
    );
  })
);
