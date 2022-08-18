import React, { forwardRef, memo } from "react";
import { DefaultTheme } from "styled-components/native";
import { ViewProps, View as RNView } from "react-native";
import { StyledComponent } from "styled-components";
import { IMakeStyledComponent } from "../../helpers/types";
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
  _extraProps?: string;
  AccessibilityRole?: string;
}

export const View = memo(
  forwardRef((props: IView, ref) => {
    const { _style, _variant, children, _extraProps, ...rest } = props;
    // TODO: make this with useMemo
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _extraProps,
        _style,
        _variant,
      },
      RNView
    );
    return (
      <RenderComponent {...rest} ref={ref}>
        {children}
      </RenderComponent>
    );
  })
);
