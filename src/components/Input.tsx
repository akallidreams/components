import { useTheme } from "styled-components/native";
import { Text } from "./Text";
import { forwardRef, memo, useRef, useState } from "react";
import {
  TextInputProps,
  TextInput as RNTextInput,
  StyleSheet,
} from "react-native";
import { IMakeStyledComponent, ITheme } from "../helpers/types";
import { makeStyledComponent } from "../helpers/styles";

/**
 * @params This module needs react-hook-form, yup and @hookform/resolvers
 * @example
    import * as yup from "yup";

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).max(32).required(),
    });

     const { 
        register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
  });
 * 
 */

interface ITextInput extends TextInputProps {
  _style?: string;
  _variant?: string;
}

export const TextInput = memo(
  forwardRef((props: ITextInput, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const theme: ITheme = useTheme() as ITheme;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _style,
        _variant,
        theme,
      },
      RNTextInput
    );
    return (
      <RenderComponent ref={ref} {...rest}>
        {children}
      </RenderComponent>
    );
  })
);

interface IProps extends ITextInput {
  _errors: FieldErrors;
  _register: UseFormRegister<any>;
  _colors: {
    error: string;
    main: string;
  };
  _label: string;
}

interface IValidateColor {
  _errors: FieldErrors;
  _colors: {
    error: string;
    main: string;
  };
  inputName: string;
}

const validateColor = ({ _colors, _errors, inputName }: IValidateColor) => {
  if (inputName in _errors) {
    return _colors.error;
  }
  return _colors.main;
};

export const Input = memo(
  forwardRef((props: IProps, ref) => {
    const {
      _style,
      _variant,
      _register: { onChangeText, _errors, ...register },
      _colors = { error: "red", main: "blue" },
      _label,
      ...rest
    } = props;
    // TODO: check if this is making re-rendering
    const inputName = _label.toLowerCase().trim().replace(/ /g, "_");
    const [value, setValue] = useState("");
    return (
      <>
        <Text
          _style={`color: ${validateColor({ _colors, _errors, inputName })}`}
        >
          {_label}
        </Text>
        <RNTextInput
          {...register}
          ref={ref}
          onChangeText={(text) => {
            setValue(text);
            onChangeText(inputName)(text);
          }}
          {...rest}
          value={value}
          style={{
            color: validateColor({ _colors, _errors, inputName }),
            borderColor: validateColor({ _colors, _errors, inputName }),
            borderWidth: 1,
          }}
          name={inputName}
        />
        {inputName in _errors ? (
          <Text data-testId="error-message" _style={`color: ${_colors.error}`}>
            {_errors?.[inputName]}
          </Text>
        ) : null}
      </>
    );
  })
);

const styles = StyleSheet.flatten({});

export const TextArea = memo((props: ITextInput) => (
  <TextInput {...props} multiline _style="text-align-vertical: top" />
));

// export const InputLength = memo((props: IProps | any) => {
//   const { _schema, ...rest } = props;
//   return (
//     <Input
//       {...rest}
//       _schema={schemas.length(props._schema as SchemasTypes.ILength)}
//     />
//   );
// });

// export const InputEmail = memo((props: IProps | any) => {
//   const { _schema, ...rest } = props;
//   return (
//     <Input
//       {...rest}
//       _schema={schemas.email(props._schema as SchemasTypes.IEmail)}
//     />
//   );
// });

// export const InputRequired = memo((props: IProps | any) => {
//   const { _schema, ...rest } = props;
//   return (
//     <Input
//       {...rest}
//       _schema={schemas.required(props._schema as SchemasTypes.IBase)}
//     />
//   );
// });

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
