import { memo } from "react";
import { View } from "./View";

const extraProps = {
  HSection: `flex-direction: row;`,
  VSection: `flex-direction: column;`,
};

export const HSection = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <View _extraProps={extraProps.HSection} {...rest}>
      {children}
    </View>
  );
});

export const VSection = memo((props: any) => {
  const { children, ...rest } = props;
  return (
    <View _extraProps={extraProps.VSection} {...rest}>
      {children}
    </View>
  );
});
