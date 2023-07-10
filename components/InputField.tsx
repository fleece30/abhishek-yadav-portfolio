import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  onChange,
  classes,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-6 py-4 outline-none border-b-[1px] border-gray-200 md:w-1/2 focus:border-gray-700 transition duration-300 ${classes}`}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
