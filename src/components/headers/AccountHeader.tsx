import { Text, VStack } from "native-base";

interface Props {
  name: string;
  email: string;
  variants?: {
    title: string;
    subtitle: string;
  };
}

export const AccountHeader = (props: Props) => {
  return (
    <VStack bg="greyDark">
      <VStack ml="5%" my="20px">
        <Text variant={props.variants?.title || "title"}>{props.name}</Text>
        <Text variant={props.variants?.subtitle || "primary"}>
          {props.email}
        </Text>
      </VStack>
    </VStack>
  );
};

/**
 @docs
- This component is meant to be reused in every page's header. All the headers are the same, a purple header with a gradient.
 */
