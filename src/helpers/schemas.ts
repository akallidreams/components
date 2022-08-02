import { emailRegexPattern } from "./utils";
import * as SchemasTypes from "./types";
import { initialTheme } from "./initialTheme";

const base = ({ label, color }: SchemasTypes.IBase) => ({
  label,
  name: label,
  type: "text",
  color: color || initialTheme.colors.grey,
  borderColor: color || initialTheme.colors.grey,
});

const required = ({
  label,
  color,
  requiredMessage,
  rules,
}: SchemasTypes.IBase) => ({
  ...base({ label, requiredMessage, color }),
  rules: rules || {
    required: requiredMessage || "",
  },
});

const length = ({
  color,
  label,
  maxLength,
  maxLengthMessage,
  minLength,
  minLengthMessage,
  requiredMessage,
}: SchemasTypes.ILength) => ({
  ...base({ label, requiredMessage, color }),
  rules: {
    required: requiredMessage,
    maxLength: {
      message: maxLengthMessage || "",
      value: maxLength || Infinity,
    },
    minLength: {
      message: minLengthMessage || "",
      value: minLength || 0,
    },
  },
});

const email = ({
  label,
  invalidEmailMessage,
  requiredMessage,
  color,
}: SchemasTypes.IEmail) => ({
  ...base({ label, requiredMessage, color }),
  rules: {
    required: requiredMessage,
    pattern: {
      value: emailRegexPattern,
      message: invalidEmailMessage,
    },
  },
});

export const schemas = {
  base,
  email,
  length,
  required,
};
