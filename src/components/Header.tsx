import { types } from "../helpers";
import { ButtonGhost } from "./Button";
import { BackIcon, CloseIcon } from "./Icons";
import { Center, HSection, View } from "./View";

interface IPropsHeaderIcons {
  icon?: "back" | "close";
  iconSize?: string;
  color?: types.IThemeColor;
  onPressIcon: () => void;
}

const HeaderIcons = (props: IPropsHeaderIcons) =>
  props.icon === "back" ? (
    <ButtonGhost onPress={props.onPressIcon}>
      <BackIcon color={props.color} size={props.iconSize} />
    </ButtonGhost>
  ) : props.icon === "close" ? (
    <ButtonGhost onPress={props.onPressIcon}>
      <CloseIcon color={props.color} size={props.iconSize} />
    </ButtonGhost>
  ) : null;

interface IPropsHeader extends IPropsHeaderIcons {
  bg?: types.IThemeColor;
  back?: boolean;
  children: React.ReactNode | React.ReactNode[];
  height?: string | number;
}

export const Header = (props: IPropsHeader) => (
  <Center
    bg={props.bg || "transparent"}
    height={props.height || "12%"}
    width="100%"
  >
    <HSection width="100%" justifyContent="center">
      <View position="absolute" left="5%">
        <HeaderIcons
          iconSize={props.iconSize}
          icon={props.icon}
          onPressIcon={props.onPressIcon}
          color={props.color}
        />
      </View>
      <View>{props.children}</View>
    </HSection>
  </Center>
);
