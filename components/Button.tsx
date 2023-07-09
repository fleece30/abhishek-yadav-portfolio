import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  primaryColor: string;
  hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  primaryColor,
  hoverColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${primaryColor} w-1/4 px-10 py-3 hover:${hoverColor} transition duration-400`}
    >
      {text}
    </button>
  );
};

export default Button;
