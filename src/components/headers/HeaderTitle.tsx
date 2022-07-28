import { Text, VStack } from "native-base";
import { Atomic } from "..";

interface IProps {
  title: string;
  subtitle?: string;
  colors?: {
    title?: string;
    subtitle?: string;
  };
  variants?: {
    title?: string;
    subtitle?: string;
  };
  space?: string;
}

export const HeaderTitle = (props: IProps) => {
  return (
    <VStack w="full" h="200px" bg="primary">
      <Atomic.CloseScreen />
      <VStack
        h="full"
        space={props?.space || "30px"}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          variant={props.variants?.title || "title"}
          color={props?.colors?.title || "greyDark"}
        >
          {props.title}
        </Text>
        {props.subtitle ? (
          <Text
            variant={props.variants?.subtitle || "primary"}
            color={props?.colors?.title || "greyDark"}
          >
            {props.subtitle}
          </Text>
        ) : null}
      </VStack>
    </VStack>
  );
};
