import { ArrowBackIcon, Button, HStack, Text, VStack } from "native-base";
import { ReactNode } from "react";
import { useNav } from "../../hooks";

interface Props {
  children: ReactNode;
  title: string;
  variants?: {
    title: string;
  };
}
export const HeaderContainer = (props: Props) => {
  const { back } = useNav();

  return (
    <VStack bg="greyDark">
      (
      <HStack mt="50px" alignItems="center">
        <Button onPress={back} variant="ghost">
          <ArrowBackIcon color="primary" />
        </Button>
        <Text variant={props.variants?.title || "title"}>{props.title}</Text>
      </HStack>
      ){props.children}
    </VStack>
  );
};
