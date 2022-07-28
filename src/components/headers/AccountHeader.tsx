import { Text, VStack } from "native-base";

interface IProps {
  title: string;
  subtitle: string;
  bg?: string;
  variants?: {
    title: string;
    subtitle: string;
  };
}

export const AccountHeader = (props: IProps) => {
  return (
    <VStack bg={props?.bg || "greyDark"}>
      <VStack ml="5%" my="20px">
        <Text variant={props.variants?.title || "title"}>{props.title}</Text>
        <Text variant={props.variants?.subtitle || "primary"}>
          {props.subtitle}
        </Text>
      </VStack>
    </VStack>
  );
};

/**
 @docs
- This component is meant to be reused in every page's header. All the headers are the same, a purple header with a gradient.
 */
