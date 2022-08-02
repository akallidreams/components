import { types } from "../helpers";
import { ButtonGhost } from "./Button";
import { BackIcon, CloseIcon } from "./Icons";
import { Center, HSection, View } from "./View";

interface IPropsHeaderIcons {
  icon?: "back" | "close";
  action: () => void;
  color?: types.IThemeColor;
}

const HeaderIcons = (props: IPropsHeaderIcons) =>
  props.icon === "back" ? (
    <ButtonGhost onPress={() => props.action()}>
      <BackIcon color={props.color} />
    </ButtonGhost>
  ) : props.icon === "close" ? (
    <ButtonGhost onPress={() => props.action()}>
      <CloseIcon color={props.color} />
    </ButtonGhost>
  ) : null;

interface IPropsHeader extends IPropsHeaderIcons {
  bg?: types.IThemeColor;
  back?: boolean;
  children: React.ReactNode | React.ReactNode[];
  h?: string | number;
}

// Make here header with backbutton closebutton useNav and content inside
export const Header = (props: IPropsHeader) => (
  <Center bg={props.bg || "transparent"} height={props.h || "12%"} width="100%">
    <HSection width="100%" justifyContent="center">
      <View position="absolute" left="5%">
        <HeaderIcons
          icon={props.icon}
          action={props.action}
          color={props.color}
        />
      </View>
      <View>{props.children}</View>
    </HSection>
  </Center>
);

// TODO: Header with profile prop
