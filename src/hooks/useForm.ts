import { useState } from "react";

export const useForm = ({ initialState = {}, schema = {} }: any) => {
  const [formData, setFormData] =
    useState<{ [key: string]: string }>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitTouched, setSubmitTouched] = useState<boolean>(false);

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

  const handleSubmitForm = (
    callback: (formData: { [key: string]: string }) => void
  ) => {
    setSubmitTouched(true);
    handleValidation();
    return callback(formData);
  };

  const handleValidation = () => {
    schema
      .validate(formData, { abortEarly: false })
      .then((valid: boolean) => {
        setErrors({});
      })
      .catch(async (error: any) => {
        let errors: { [key: string]: string } = {};
        await error.inner.forEach((e: any) => {
          const { path, message } = e;
          errors[path] = message;
        });
        setErrors(errors);
      });
  };

  const handleBlur = async () => {
    if (!submitTouched) return;
    handleValidation();
  };

  const register = {
    onChangeText: handleChange,
    onBlur: handleBlur,
    _errors: errors,
  };

  return { formData, handleSubmitForm, register, errors };
};
