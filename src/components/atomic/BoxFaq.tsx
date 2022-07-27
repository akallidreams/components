import { Text, VStack } from "native-base";

interface Props {
  question: string;
  answer: string;
  variants: {
    question: string;
    answer: string;
  };
}

export const BoxFaq = ({ question, answer, variants }: Props) => {
  return (
    <VStack
      px="10px"
      py="10px"
      w="350px"
      borderColor="greyDark"
      borderRadius="10px"
      borderWidth="1px"
    >
      <Text variant={variants?.question || "primary"} mb="10px">
        {question}
      </Text>
      <Text variant={variants?.answer || "primary"}>{answer}</Text>
    </VStack>
  );
};
