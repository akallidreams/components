import { emailRegexPattern } from "./utils";
import * as SchemasTypes from "./types";
import { initialTheme } from "./themeContext";

const base = ({
  label,
  requiredMessage,
  color,
  borderColor,
}: SchemasTypes.IBase) => ({
  rules: {
    required: requiredMessage,
  },
  label,
  name: label,
  type: "text",
  color: color || initialTheme.colors.grey,
  borderColor: borderColor || initialTheme.colors.grey,
});

const maxLength = ({
  label,
  maxLength,
  maxLengthMessage,
  requiredMessage,
}: SchemasTypes.IMaxLength) => ({
  ...base({ label, requiredMessage, rules: {} }),
  rules: {
    required: requiredMessage,
    maxLength: {
      message: maxLength,
      value: maxLengthMessage,
    },
  },
});

const minLength = ({
  label,
  minLengthMessage,
  minLength,
  requiredMessage,
}: SchemasTypes.IMinLength) => ({
  ...base({ label, requiredMessage, rules: {} }),
  rules: {
    required: requiredMessage,
    minLength: {
      message: minLength,
      value: minLengthMessage,
    },
  },
});

// const email = ({ label, rules, requiredMessage }: SchemasTypes.IEmail) => ({
//   ...base({ label, requiredMessage }),
//   rules: {
//     required: requiredMessage,
//     pattern: {
//       value: emailRegexPattern,
//       message: rules.message,
//     },
//   },
// });

// const password = ({ label, rules, requiredMessage }: SchemasTypes.ILength) => ({
//   ...base({ label, requiredMessage }),
//   type: "password",
//   rules: {
//     required: requiredMessage,
//     [rules.type]: {
//       message: rules.message,
//       value: rules.value,
//     },
//   },
// });

// const repeatPassword = ({
//   label,
//   rules,
//   requiredMessage,
//   handleSamePassword,
// }: SchemasTypes.IRepeatPassword) => ({
//   ...base({ label, requiredMessage }),
//   type: "password",
//   rules: {
//     required: requiredMessage,
//     [rules.type]: {
//       message: rules.message,
//       value: rules.value,
//     },
//     validate: {
//       checkSamePassword: handleSamePassword,
//     },
//   },
// });

export const schemas = {
  base,
  // email,
  maxLength,
  minLength,
  // password,
  // repeatPassword,
};
