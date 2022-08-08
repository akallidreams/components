import { memo } from "react";
import { types } from "../helpers";
import { ButtonGhost } from "./Button";
import { BackIcon, CloseIcon } from "./Icons";
import { Center, HSection, View } from "./View";

interface IPropsHeaderIcons {
  _icon?: "back" | "close";
  _iconSize?: string;
  color?: types.IThemeColor;
  _onPressIcon: () => void;
}

const HeaderIcons = memo((props: IPropsHeaderIcons) =>
  props._icon === "back" ? (
    <ButtonGhost onPress={props._onPressIcon}>
      <BackIcon color={props.color} size={props._iconSize} />
    </ButtonGhost>
  ) : props._icon === "close" ? (
    <ButtonGhost onPress={props._onPressIcon}>
      <CloseIcon color={props.color} size={props._iconSize} />
    </ButtonGhost>
  ) : null
);

interface IPropsHeader extends IPropsHeaderIcons {
  bg?: types.IThemeColor;
  children: React.ReactNode | React.ReactNode[];
  height?: string | number;
}

export const Header = memo((props: IPropsHeader) => (
  <Center
    bg={props.bg || "transparent"}
    height={props.height || "12%"}
    width="100%"
  >
    <HSection width="100%" justifyContent="center">
      <View position="absolute" left="5%">
        <HeaderIcons
          _iconSize={props._iconSize}
          _icon={props._icon}
          _onPressIcon={props._onPressIcon}
          color={props.color}
        />
      </View>
      <View>{props.children}</View>
    </HSection>
  </Center>
));
