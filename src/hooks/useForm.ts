import { useState } from "react";

export const useForm = ({ initialState = {}, schema = {} }: any) => {
  const [formData, setFormData] =
    useState<{ [key: string]: string }>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string) => {
    return (value: string) => {
      setFormData((prevState) => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    };
  };

  const handleSubmit = () => {};

  const handleBlur = async () => {
    schema
      .validate(formData, { abortEarly: false })
      .then((valid) => {
        setErrors({});
      })
      .catch(async (error) => {
        let errors: any = {};
        await error.inner.forEach((e) => {
          const { path, message } = e;
          errors[path] = message;
        });
        setErrors(errors);
      });
  };

  const register = {
    onChangeText: handleChange,
    onBlur: handleBlur,
    _errors: errors,
  };

  return { formData, handleSubmit, register, errors };
};
