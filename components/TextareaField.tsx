import React from "react";

interface TextareaFieldProps {
  placeholder: string;
  classes?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  placeholder,
  classes,
  onChange,
  value,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`px-6 py-4 outline-none whitespace-pre-wrap border-b-[1px] border-gray-200 md:w-1/2 h-72 resize-none focus:border-gray-700 transition duration-300 ${classes}`}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextareaField;
