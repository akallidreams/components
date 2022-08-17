import { forwardRef, memo } from "react";
import { View } from "./View";

const extraProps = {
  HSection: `flex-direction: row;`,
  VSection: `flex-direction: column;`,
};

export const HSection = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <View _extraProps={extraProps.HSection} {...rest} ref={ref}>
        {children}
      </View>
    );
  })
);

export const VSection = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <View _extraProps={extraProps.VSection} {...rest} ref={ref}>
        {children}
      </View>
    );
  })
);
