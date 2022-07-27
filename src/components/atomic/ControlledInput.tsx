import { FormControl, Input, Text } from "native-base";
import { Controller } from "react-hook-form";

interface Props {
  errors: any;
  rules: any;
  control: any;
  label: string;
  name: string;
  type: "text" | "password" | undefined;
  placeholder: string;
  color?: string;
  borderColor?: string;
  variants?: {
    label: string;
    input: string;
  };
}

export const ControlledInput = (props: Props) => {
  return (
    <FormControl isRequired isInvalid={props.name in props.errors}>
      <FormControl.Label>
        <Text variant={props.variants?.label || "primary"} fontSize="18px">
          {props.label}
        </Text>
      </FormControl.Label>
      <Controller
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            placeholder={props.placeholder}
            onChangeText={(val) => onChange(val)}
            value={value}
            type={props.type}
            color={props.color || "greyDark"}
            variant={props.variants?.input || "underlined"}
            borderColor={props.borderColor || "greyDark"}
          />
        )}
        name={props.name}
        rules={props.rules}
        defaultValue=""
      />
      <FormControl.ErrorMessage>
        {props.errors?.[props.name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
