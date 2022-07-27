import { Button, HStack, Text } from "native-base";

// FIXME: fix the any types
interface Props {
  action: any;
  Icon: any;
  text: string;
  ml: string;
  bg?: string;
  variants?: {
    text: string;
  };
}

export const IconTextButton = ({
  action,
  Icon,
  text,
  ml,
  bg,
  variants,
}: Props) => {
  return (
    <Button ml={ml} onPress={action} bg="transparent" alignSelf="flex-start">
      <HStack>
        <Icon size="20px" color={bg || "greyDark"} />
        <Text variant={variants?.text || "primary"} ml="10px">
          {text}
        </Text>
      </HStack>
    </Button>
  );
};
