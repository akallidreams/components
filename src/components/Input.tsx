import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components/native";
import { schemas } from "../helpers";
import { Text } from "./Text";
import { types as SchemasTypes } from "../helpers";
import { initialTheme } from "../helpers";
import { IView } from "./View";
import { color, space, layout, flexbox, position, border } from "styled-system";
import { themedBG, themedBorderColor, themedFontSize } from "../helpers/styles";

export const TextInput = styled.TextInput<IView>`
  ${color}
  ${space}
  ${border}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
  ${themedBorderColor as any}
`;

type ISchema = SchemasTypes.IEmail | SchemasTypes.ILength | SchemasTypes.IBase;
interface IProps {
  schema: ISchema;
  errors: FieldErrors;
  control: Control;
}

const validateColor = (schema: ISchema, errors: FieldErrors) =>
  schema.label in errors
    ? initialTheme.colors.error
    : schema.color || initialTheme.colors.grey;

export const Input = ({ schema, errors, control }: IProps) => {
  return (
    <>
      <Text color={validateColor(schema, errors)}>{schema.label}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(val: string) => onChange(val)}
            value={value}
            color={validateColor(schema, errors)}
            borderColor={validateColor(schema, errors)}
            borderBottomWidth="1px"
          />
        )}
        rules={schema.rules}
        name={schema.label || ""}
        defaultValue=""
      />
      {schema.label in errors ? (
        <Text data-testId="error-message" color={initialTheme.colors.error}>
          {errors?.[schema.label]?.message}
        </Text>
      ) : null}
    </>
  );
};

export const TextArea = (props: IView) => (
  <TextInput {...props} multiline textAlignVertical="top" />
);

export const InputLength = (props: IProps) => (
  <Input
    {...props}
    schema={schemas.length(props.schema as SchemasTypes.ILength)}
  />
);

export const InputEmail = (props: IProps) => (
  <Input
    {...props}
    schema={schemas.email(props.schema as SchemasTypes.IEmail)}
  />
);

export const InputRequired = (props: IProps) => (
  <Input
    {...props}
    schema={schemas.required(props.schema as SchemasTypes.IBase)}
  />
);

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
