import { Text, Link, Divider } from "native-base";
import { FC } from "react";
import { useNav } from "../../hooks";

interface Props {
  name: string;
  height: number;
  route?: string;
  action?: any;
  Icon: FC<any>;
}

export const ListItem = (props: Props) => {
  const { navigate } = useNav();
  const { Icon } = props;

  const handlePress = () => {
    if (props.route) {
      navigate(props.route);
    }
  };

  return (
    <>
      <Link
        onPress={handlePress}
        height={`${props.height}px`}
        w="full"
        alignItems="center"
        p="25px"
      >
        {/* FIXME: Fix type here */}
        <Icon size="5" color="primary.icon.color" />
        <Text variant="headerBold" ml="15px" fontSize="15px">
          {props.name}
        </Text>
      </Link>
      <Divider mx="5%" w="90%" my="15px" />
    </>
  );
};

/**
 @docs
- This component was made to display a list of items with a certain background color, size, and border, in a standardized way, to be reused across the app.
 */
