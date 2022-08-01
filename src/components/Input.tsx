import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components/native";
import { schemas } from "../helpers";
import { Text } from "./Text";
import { types as SchemasTypes } from "../helpers";
import { initialTheme } from "../helpers/themeContext";
import { IView } from "./View";

export const TextInput = styled.TextInput``;

type ISchema =
  | SchemasTypes.IEmail
  | SchemasTypes.IMaxLength
  | SchemasTypes.IMinLength
  | SchemasTypes.IRepeatPassword
  | SchemasTypes.IBase;
interface IProps {
  schema: any;
  errors: FieldErrors;
  control: Control;
}

// TODO: handle the requiredMessage somewhere
// This base input generate the other inputs controlled at this point i dont need noRules anymore and just need to inject the schemas at the new comps
export const Input = ({ schema, errors, control }: IProps) => {
  return (
    <>
      <Text
        color={
          schema?.label in errors
            ? "tomato"
            : schema?.color || initialTheme.colors.grey
        }
      >
        {schema?.label}
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            placeholder={schema?.placeholder}
            onChangeText={(val) => onChange(val)}
            value={value}
            type={schema?.type}
            color={schema?.color || initialTheme.colors.grey}
            borderColor={schema?.borderColor || initialTheme.colors.grey}
          />
        )}
        name={schema?.label || ""}
        defaultValue=""
      />
      {/* {schema && schema?.label in errors ? (
        <Text color="tomato">{errors?.[schema.label]?.message}</Text>
      ) : null} */}
    </>
  );
};

export const TextArea = (props: IView) => (
  <TextInput {...props} multiline textAlignVertical="top" />
);

export const InputMaxLength = (props: IProps) => {
  console.log(props, "entrou vivo");
  return <Input {...props} schema={schemas.maxLength(props.schema)} />;
};

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
