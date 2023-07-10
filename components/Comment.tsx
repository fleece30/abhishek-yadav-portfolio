import React from "react";

interface CommentProps {
  commentBody: string;
  postedBy: string;
  createdAt: Date;
}

const Comment: React.FC<CommentProps> = ({
  commentBody,
  postedBy,
  createdAt,
}) => {
  return (
    <div className="flex flex-col space-y-3 border-b-gray-200 border-b-[1px] px-5 py-7">
      <div className="flex text-sm text-text-gray space-x-1.5">
        <span>{postedBy}</span>
        <span>&bull;</span>
        <span className="text-light-gray">
          {createdAt.getDate() +
            " " +
            createdAt.toLocaleString("default", { month: "long" }) +
            ", " +
            createdAt.getFullYear()}
        </span>
      </div>
      <div>
        <span>{commentBody}</span>
      </div>
    </div>
  );
};

export default Comment;
