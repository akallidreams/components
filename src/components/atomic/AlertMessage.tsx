import { Alert, HStack, Text } from "native-base";

interface Props {
  message: string;
  type: string;
  variants?: {
    text: string;
  };
}

export const AlertMessage = (props: Props) => {
  return (
    <Alert w="full" status={props.type} borderRadius={0}>
      <HStack space={2} alignItems="center" w="full">
        <Alert.Icon size="6px" />
        <Text variant={props.text || "primary"} color="white">
          {props.message}
        </Text>
      </HStack>
    </Alert>
  );
};

/**
 @docs
- This component is made to display alerts on the page and right now it's being used to display important messages too. But this is later to be changed.
 */
