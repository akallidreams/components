import { forwardRef, memo } from "react";
import { View } from "./View";

const extraProps = {
  HCenter: "justify-content: center;",
  VCenter: "align-items: center;",
  Center: `
    justify-content: center; 
    align-items: center;
  `,
};

export const Center = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <View _extraProps={extraProps.Center} {...rest} ref={ref}>
        {children}
      </View>
    );
  })
);

export const HCenter = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <View _extraProps={extraProps.HCenter} {...rest} ref={ref}>
        {children}
      </View>
    );
  })
);

export const VCenter = memo(
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props;
    return (
      <View _extraProps={extraProps.VCenter} {...rest} ref={ref}>
        {children}
      </View>
    );
  })
);
