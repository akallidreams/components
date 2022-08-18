import { Text } from "./Text";
import { forwardRef, LegacyRef, memo, useEffect, useState } from "react";
import {
  TextInputProps,
  TextInput as RNTextInput,
  Text as RNText,
  View as RNView,
} from "react-native";
import { IColor, IMakeStyledComponent, ITheme } from "../helpers/types";
import { makeStyledComponent } from "../helpers/styles";
import { StyleProps } from "react-native-reanimated";
import { initialTheme } from "../helpers";

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
    error?: IColor;
    main?: IColor;
  };
  _placeholder?: string;
  _label: string;
  _customStyles?: {
    label?: string;
    errorMessage?: string;
    NativeTextInput?: StyleProps;
  };
}

interface IValidateColor {
  _errors: { [key: string]: string } | {};
  _colors?: {
    error?: IColor;
    main?: IColor;
  };
  inputName: string;
}
const defaultColors = {
  error: initialTheme.colors.error,
  main: initialTheme.colors.grey,
};

const validateColor = ({
  _colors = { error: defaultColors.error, main: defaultColors.main },
  _errors,
  inputName,
}: IValidateColor) => {
  if (inputName in _errors) {
    return _colors.error;
  }
  return _colors.main;
};

export const Input = memo(
  forwardRef((props: IProps, ref: LegacyRef<RNTextInput> | undefined) => {
    const {
      _customStyles,
      _placeholder,
      _register: { onChangeText, _errors, ...register },
      _colors,
      _label,
      ...rest
    } = props;
    const inputName = _label.toLowerCase().trim().replace(/ /g, "_");
    const [value, setValue] = useState(""); // TODO: what is better, this or formData at key position?
    const [validColor, setValidColor] = useState("");

    useEffect(() => {
      const validatedColor: IColor = validateColor({
        _colors: _colors || defaultColors,
        _errors,
        inputName,
      }) as IColor;
      if (validColor !== undefined) setValidColor(validatedColor);
    }, [_errors]);

    return (
      <RNView style={{ width: "100%" }}>
        <Text
          _style={`
          ${_customStyles?.label};
          color: ${validColor || defaultColors.main};
        `}
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
            borderWidth: 1,
            ..._customStyles?.NativeTextInput,
            color: validColor || defaultColors.main,
            borderColor: validColor || defaultColors.main,
          }}
          {...rest}
        />
        {inputName in _errors ? (
          <Text
            data-testId="error-message"
            _style={`
              ${_customStyles?.errorMessage};
             color: ${_colors?.error || defaultColors.error}};
          `}
          >
            {_errors?.[inputName as keyof typeof _errors]}
          </Text>
        ) : null}
      </RNView>
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
