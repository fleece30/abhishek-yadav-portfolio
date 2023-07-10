import React from "react";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import CallToActionBtn from "@/components/CallToActionBtn";
import CIcon from "@coreui/icons-react";
import { cilSend } from "@coreui/icons";

interface CommentBoxProps {
  isOpen: boolean;
  onInputFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputFieldValue: string;
  textAreaValue: string;
  handleCallToAction: () => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  isOpen,
  onInputFieldChange,
  onTextareaChange,
  inputFieldValue,
  textAreaValue,
  handleCallToAction,
}) => {
  return (
    <div
      className={`flex flex-col space-y-3 w-full border-b-gray-200 border-b-[1px] md:px-5 py-0 transition-max-height duration-300 overflow-hidden items-end ${
        isOpen ? "max-h-64" : "max-h-0"
      }`}
    >
      <InputField
        type={"text"}
        placeholder={"Your name (You can leave this blank too!)"}
        onChange={onInputFieldChange}
        classes={"md:w-full text-sm border-none"}
        value={inputFieldValue}
      />
      <TextareaField
        placeholder={"Comment..."}
        onChange={onTextareaChange}
        classes={"md:w-full h-1/3"}
        value={textAreaValue}
      />
      <CallToActionBtn
        onClick={handleCallToAction}
        icon={<CIcon icon={cilSend} height={20} />}
        toolTipText={"Post"}
        classes={"px-10"}
      />
    </div>
  );
};

export default CommentBox;
