import { Controller, Control, FieldErrors } from "react-hook-form";
import styled from "styled-components/native";
import { schemas } from "../helpers";
import { Text } from "./Text";
import { types as SchemasTypes } from "../helpers";
import { initialTheme } from "../helpers";
import { IView } from "./View";
import { color, space, layout, flexbox, position, border } from "styled-system";
import { themedBG, themedBorderColor, themedFontSize } from "../helpers/styles";
import { memo } from "react";
import { TextInputProps } from "react-native";

interface ITextInput extends IView, TextInputProps {
  style: any;
}

export const TextInput = memo(styled.TextInput<ITextInput>`
  ${color}
  ${space}
  ${border}
  ${layout}
  ${flexbox}
  ${position}
  ${themedBG as any}
  ${themedFontSize as any}
  ${themedBorderColor as any}
`);

type ISchema = SchemasTypes.IEmail | SchemasTypes.ILength | SchemasTypes.IBase;
interface IProps extends IView {
  _schema: ISchema;
  _errors: FieldErrors;
  _control: Control;
}

const validateColor = (schema: ISchema, errors: FieldErrors) =>
  schema.label in errors
    ? initialTheme.colors.error
    : schema.color || initialTheme.colors.grey;

export const Input = memo(({ _schema, _errors, _control, ...rest }: IProps) => {
  return (
    <>
      <Text color={validateColor(_schema, _errors)}>{_schema.label}</Text>
      <Controller
        control={_control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...rest}
            onBlur={onBlur}
            onChangeText={(val: string) => onChange(val)}
            value={value}
            color={validateColor(_schema, _errors)}
            borderColor={validateColor(_schema, _errors)}
            borderBottomWidth="1px"
            width={_schema.width || "100%"}
          />
        )}
        rules={_schema.rules}
        name={_schema.label || ""}
        defaultValue=""
      />
      {_schema.label in _errors ? (
        <Text data-testId="error-message" color={initialTheme.colors.error}>
          {_errors?.[_schema.label]?.message}
        </Text>
      ) : null}
    </>
  );
});

export const TextArea = memo((props: IView) => (
  <TextInput {...props} multiline textAlignVertical="top" />
));

export const InputLength = memo((props: IProps | any) => {
  const { _schema, ...rest } = props;
  return (
    <Input
      {...rest}
      _schema={schemas.length(props._schema as SchemasTypes.ILength)}
    />
  );
});

export const InputEmail = memo((props: IProps | any) => {
  const { _schema, ...rest } = props;
  return (
    <Input
      {...rest}
      _schema={schemas.email(props._schema as SchemasTypes.IEmail)}
    />
  );
});

export const InputRequired = memo((props: IProps | any) => {
  const { _schema, ...rest } = props;
  return (
    <Input
      {...rest}
      _schema={schemas.required(props._schema as SchemasTypes.IBase)}
    />
  );
});

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
