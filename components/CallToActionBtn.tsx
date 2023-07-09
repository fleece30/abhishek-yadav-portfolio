import React, { ReactElement } from "react";
import { CTooltip } from "@coreui/react";

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
    <CTooltip content={toolTipText}>
      <button type="button" className="relative w-fit h-fit" onClick={onClick}>
        {icon !== undefined && (
          <span className="left-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full p-2">
            {icon}
          </span>
        )}
      </button>
    </CTooltip>
  );
};

export default CallToActionBtn;
