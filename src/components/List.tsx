// ListIcon
import styled from "styled-components/native";
import { IView } from "./View";
import { color, space, layout, flexbox, border, position } from "styled-system";
import { themedBG, themedFontSize } from "../helpers/styles";

export const SectionList = styled.SectionList<IView>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;

export const FlatList = styled.FlatList<IView>`
  ${color}
  ${border}
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
`;
