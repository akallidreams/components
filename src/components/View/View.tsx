import React, { ComponentType, memo } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { ViewProps, View as RNView } from "react-native";
import { For } from "../List";
import { StyledComponent } from "styled-components";
import { IMakeStyledComponent, ITheme } from "../../helpers/types";
import { Show } from "./Show";
import { makeStyledComponent } from "../../helpers/styles";

/**
 * @summary Provides all types of semantic views using styled-components and styled-system.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution. Accepts key like ignoreProps, resolveResponsively.
 * @returns {object} Returns a styled component with shortcut based on System UI Theme Specification.
 */

export type IStyledViewBase = StyledComponent<
  typeof RNView,
  DefaultTheme,
  {},
  never
>;

export interface IView extends ViewProps {
  _style?: string;
  _variant?: string;
  AccessibilityRole?: string;
}

export const View = memo((props: IView) => {
  const { _style, _variant, children, ...rest } = props;
  const theme: ITheme = useTheme() as ITheme;
  const RenderComponent: IMakeStyledComponent = makeStyledComponent(
    {
      _style,
      _variant,
      theme,
    },
    RNView
  );
  return <RenderComponent {...rest}>{children}</RenderComponent>;
});

interface IViewSuper extends IView {
  _condition?: boolean;
  _fallback?: React.ReactNode;
  _list?: any;
  _item?: React.ReactNode;
}

// export const View = memo((props: IViewSuper | any) => {
//   const { _condition, _fallback, _list, _item, children, _style, ...rest } =
//     props;
//   if (_condition !== undefined) {
//     return (
//       <Show
//         _condition={_condition}
//         _fallback={_fallback}
//         _style={_style}
//         {...rest}
//       >
//         {children}
//       </Show>
//     );
//   } else if (_list !== undefined) {
//     return <For _list={_list} _item={_item} _style={_style} {...rest} />;
//   }
//   return (
//     <StyledView _style={_style} {...rest}>
//       {children}
//     </StyledView>
//   );
// });

// export default memo(forwardRef(View));
