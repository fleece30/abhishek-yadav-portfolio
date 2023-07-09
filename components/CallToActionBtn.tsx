import React, { ReactElement } from "react";

interface CallToActionBtnProps {
  onClick: () => void;
  icon?: ReactElement;
  toolTipText: string;
}

const CallToActionBtn: React.FC<CallToActionBtnProps> = ({
  onClick,
  icon,
  toolTipText,
}) => {
  return (
    <button
      type="button"
      className="relative w-fit h-fit tooltip"
      onClick={onClick}
    >
      {icon !== undefined && (
        <span className="left-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full p-2">
          {icon}
        </span>
      )}
      <span className="tooltip-text">{toolTipText}</span>
    </button>
  );
};

export default CallToActionBtn;
