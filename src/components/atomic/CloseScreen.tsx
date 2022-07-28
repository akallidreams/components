import { Box, Pressable } from "native-base";
import { AkIcons } from "@akalli/icons";
import { AkNavigation } from "@akalli/navigation";

const baseDistance = {
  right: 50,
  top: 60,
};

interface IProps {
  right?: number;
  top?: number;
  left?: number;
  bottom?: number;
  route?: string;
}

export const CloseScreen = (props: IProps = baseDistance) => {
  const { navigate } = AkNavigation.useNav();
  return (
    <Box position="absolute" top="45px" left="30px" {...props}>
      <Pressable
        onPress={() => {
          navigate(props.route || "Main");
        }}
      >
        <AkIcons.NavIcons.CloseIcon size="22px" />
      </Pressable>
    </Box>
  );
};
