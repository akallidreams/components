import { useTheme } from "styled-components/native";
import { Text } from "./Text";
import { forwardRef, LegacyRef, memo, useState } from "react";
import { TextInputProps, TextInput as RNTextInput } from "react-native";
import { IMakeStyledComponent, ITheme } from "../helpers/types";
import { makeStyledComponent } from "../helpers/styles";

/**
 * @params this module needs yup to validation 
 * @example
    import * as yup from "yup";

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).max(32).required(),
    });

     pass the register prop from useForm to validate the form

  @styling
     You can style the input with the following props:
      - colors:
        - main: the main color of the input
        - error: the color of the input when it has an error
      
      the rest you can add to a prop called style and pass 
      it to the TextInput component using camelCase syntax

    If you want more conrtrol over the input you can import TextInput from 
    our lib that is the common input without validation and you can style using our main syntax
 * 
 */

interface ITextInput extends TextInputProps {
  _style?: string;
  _variant?: string;
}

export const TextInput = memo(
  forwardRef((props: ITextInput, ref) => {
    const { _style, _variant, children, ...rest } = props;
    const RenderComponent: IMakeStyledComponent = makeStyledComponent(
      {
        _style,
        _variant,
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
  _register: {
    onChangeText: (key: string) => (value: string) => void;
    onBlur: () => void;
    _errors: { [key: string]: string } | {};
  };
  _colors?: {
    error: string;
    main: string;
  };
  _placeholder?: string;
  _label: string;
}

interface IValidateColor {
  _errors: { [key: string]: string } | {};
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
  forwardRef((props: IProps, ref: LegacyRef<RNTextInput> | undefined) => {
    const {
      _style,
      _variant,
      _placeholder,
      _register: { onChangeText, _errors, ...register },
      _colors = { error: "red", main: "blue" },
      _label,
      ...rest
    } = props;
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
          placeholder={_placeholder}
          value={value}
          style={{
            color: validateColor({ _colors, _errors, inputName }),
            borderColor: validateColor({ _colors, _errors, inputName }),
            borderWidth: 1,
          }}
          {...rest}
        />
        {inputName in _errors ? (
          <Text data-testId="error-message" _style={`color: ${_colors.error}`}>
            {_errors?.[inputName as keyof typeof _errors]}
          </Text>
        ) : null}
      </>
    );
  })
);

export const TextArea = memo((props: ITextInput) => (
  <TextInput {...props} multiline _style="text-align-vertical: top" />
));

/**
 @docs
- This component is a controlled input using react-hook-form for validations and error messages
 */
