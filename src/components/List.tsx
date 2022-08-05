// ListIcon
import styled from "styled-components/native";
import { IView, View } from "./View";
import { color, space, layout, flexbox, border, position } from "styled-system";
import { themedBG, themedFontSize } from "../helpers/styles";
import { SectionListProps, ScrollViewProps, FlatListProps } from "react-native";

interface IFlatList extends ScrollViewProps, FlatListProps<any>, IView {}

interface ISectionList extends SectionListProps<any>, IView {}

export const SectionList = styled.SectionList<ISectionList | any>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;

export const FlatList = styled.FlatList<IFlatList | any>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;

interface IFor extends IFlatList {
  _list: any;
}

export const For = (props: IFor | any) => {
  const { _list, ...rest } = props;
  return (
    <FlatList
      {...rest}
      data={_list}
      keyExtractor={() => +new Date().toString() + Math.random().toString()}
    />
  );
};
