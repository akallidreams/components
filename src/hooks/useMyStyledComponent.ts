import { ComponentType, useMemo } from "react";
import { makeStyledComponent } from "../helpers/makeStyledComponent";
import {
  IMakeStyledComponent,
  IMakeStyledComponentProps,
} from "../helpers/types";
import { useMyTheme } from "./useMyTheme";

export const useMyStyledComponent = (
  params: IMakeStyledComponentProps,
  Component: ComponentType<any>
) => {
  const theme = useMyTheme();
  const MyStyledComponent: IMakeStyledComponent = useMemo(
    () =>
      makeStyledComponent(
        { ...params, _variants: theme.variants || {} },
        Component
      ),
    [params._extraProps, params._style, params._variant]
  );
  return { MyStyledComponent };
};
