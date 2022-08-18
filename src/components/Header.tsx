import { memo } from "react";
import { initialTheme, types } from "../helpers";
import { Pressable } from "./Button";
import { BackIcon, CloseIcon } from "./Icons";
import { Center, HSection, View } from "./View";

interface IPropsHeaderIcons {
  _icon?: "back" | "close";
  _iconSize?: string | number;
  _iconColor?: types.IThemeColor;
  _onPressIcon: () => void;
}

const HeaderIcons = memo((props: IPropsHeaderIcons) =>
  props._icon === "back" ? (
    <Pressable onPress={props._onPressIcon}>
      <BackIcon
        color={props._iconColor || initialTheme.colors.grey}
        size={props._iconSize || 20}
      />
    </Pressable>
  ) : props._icon === "close" ? (
    <Pressable onPress={props._onPressIcon}>
      <CloseIcon
        color={props._iconColor || initialTheme.colors.grey}
        size={props._iconSize || 20}
      />
    </Pressable>
  ) : null
);

interface IPropsHeader extends IPropsHeaderIcons {
  bg?: types.IThemeColor;
  children: React.ReactNode | React.ReactNode[];
  height?: string | number;
}

export const Header = memo((props: IPropsHeader) => {
  const { headerWrapper, headerSection, headerIconWrapper } = styles(props);
  return (
    <Center _style={headerWrapper}>
      <HSection _style={headerSection}>
        <View _style={headerIconWrapper}>
          <HeaderIcons
            _iconSize={props._iconSize}
            _icon={props._icon}
            _onPressIcon={props._onPressIcon}
            _iconColor={props._iconColor}
          />
        </View>
        <View>{props.children}</View>
      </HSection>
    </Center>
  );
});

const styles = (props: { height?: string | number; bg?: string }) => ({
  headerWrapper: `
    height: ${props.height || "12%"};
    background-color: ${props.bg || "transparent"};
    flex-direction: row;
    width: 100%;
  `,
  headerSection: `
    width: 100%; 
    justifyContent: center;
  `,
  headerIconWrapper: `
    position: absolute;
    left: 5%;
  `,
});
