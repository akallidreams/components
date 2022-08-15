import { memo } from "react";
import { View } from "./View";

const extraProps = {
  HCenter: "justify-content: center;",
  VCenter: "align-items: center;",
  Center: `
    justify-content: center; 
    align-items: center;
  `,
};

export const Center = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <View _extraProps={extraProps.Center} {...rest}>
      {children}
    </View>
  );
});

export const HCenter = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <View _extraProps={extraProps.HCenter} {...rest}>
      {children}
    </View>
  );
});

export const VCenter = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <View _extraProps={extraProps.VCenter} {...rest}>
      {children}
    </View>
  );
});
