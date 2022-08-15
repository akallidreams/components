import { memo, ReactElement } from "react";
import { IView, View } from "./View";

interface IShow extends IView {
  _fallback?: ReactElement;
  _condition: boolean;
  _style?: string;
}

export const Show = memo((props: IShow) => {
  const { _fallback, _condition, children, _style, ...rest } = props;
  return (
    <View _style={_style} {...rest}>
      {_condition ? children : _fallback && _fallback()}
    </View>
  );
});
