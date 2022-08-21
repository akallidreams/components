import { Text } from "./Text";
import { forwardRef, memo, Ref, useEffect, useState } from "react";
import { TextInputProps, TextInput as RNTextInput } from "react-native";
import { IColor, ITheme } from "../helpers/types";
import { StyleProps } from "react-native-reanimated";
import { initialTheme } from "../helpers";
import { useMyStyledComponent } from "../hooks";
import { Center } from "./View";

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
    const { MyStyledComponent } = useMyStyledComponent(
      {
        _style,
        _variant,
      },
      RNTextInput
    );

    return (
      <MyStyledComponent {...rest} ref={ref}>
        {children}
      </MyStyledComponent>
    );
  })
);

interface IProps extends ITextInput {
  _register: {
    onChangeText: (key: string) => (value: string) => void;
    onBlur: () => void;
    _errors: { [key: string]: string } | {};
    _formData: { [key: string]: string };
  };
  _colors?: {
    error?: IColor;
    main?: IColor;
  };
  _key: string;
  _placeholder?: string;
  _label: string;
  _customStyles?: {
    label?: string;
    errorMessage?: string;
    input?: string;
    container?: string;
  };
}

interface IValidateColor {
  _errors: { [key: string]: string } | {};
  _colors?: {
    error?: IColor;
    main?: IColor;
  };
  _key: string;
}
const defaultColors = {
  error: initialTheme.colors.error,
  main: initialTheme.colors.grey,
};

const validateColor = ({
  _colors = { error: defaultColors.error, main: defaultColors.main },
  _errors,
  _key,
}: IValidateColor) => {
  if (_key in _errors) {
    return _colors.error;
  }
  return _colors.main;
};

export const Input = memo(
  forwardRef((props: IProps, ref: Ref<RNTextInput> | undefined) => {
    const {
      _customStyles,
      _placeholder,
      _register: { onChangeText, _errors, _formData, ...register },
      _colors,
      _key,
      _label,
      ...rest
    } = props;
    const [validColor, setValidColor] = useState("");

    useEffect(() => {
      const validatedColor: IColor = validateColor({
        _colors: _colors || defaultColors,
        _errors,
        _key,
      }) as IColor;
      if (validColor !== undefined) setValidColor(validatedColor);
    }, [_errors]);

    return (
      <Center _style={`width: 100%; ${_customStyles?.container}`}>
        {/** TODO: create a way to style this container */}
        <Text
          _style={`
          ${_customStyles?.label};
          color: ${validColor || defaultColors.main};
        `}
        >
          {_label}
        </Text>
        <TextInput
          {...register}
          ref={ref}
          onChangeText={(text) => {
            onChangeText(_key)(text);
          }}
          placeholder={_placeholder}
          value={_formData[_key]}
          _style={`
            width: 100%;
            border-width: 1px;
            border-color: ${validColor || defaultColors.main};
            color: ${validColor || defaultColors.main};
            ${_customStyles?.input};
          `}
          {...rest}
        />
        {_key in _errors ? (
          <Text
            data-testId="error-message"
            _style={`
              ${_customStyles?.errorMessage};
             color: ${_colors?.error || defaultColors.error}};
          `}
          >
            {_errors?.[_key as keyof typeof _errors]}
          </Text>
        ) : null}
      </Center>
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
