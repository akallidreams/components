import { forwardRef, memo, ReactNode } from "react";
import { IView, View } from "./View";

interface IShow extends IView {
  _fallback?: ReactNode;
  _condition: boolean;
  _style?: string;
}

export const Show = memo(
  forwardRef((props: IShow, ref) => {
    const { _fallback, _condition, children, _style, ...rest } = props;
    return (
      <View _style={_style} {...rest} ref={ref}>
        {_condition ? children : _fallback && _fallback()}
      </View>
    );
  })
);
