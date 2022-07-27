import { Box, Pressable } from "native-base";
import { AkIcons } from "@akalli/icons";

const baseDistance = {
  right: 50,
  top: 60,
};

interface Props {
  right?: number;
  top?: number;
  left?: number;
  bottom?: number;
  route?: string;
  navigate: any;
}

export const CloseScreen = (props: Props = baseDistance) => {
  return (
    <Box position="absolute" top="45px" left="30px" {...props}>
      <Pressable
        onPress={() => {
          props.navigate(props.route || "dashboard");
        }}
      >
        <AkIcons.NavIcons.CloseIcon size="22px" />
      </Pressable>
    </Box>
  );
};
