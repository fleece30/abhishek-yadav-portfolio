import React from "react";
import Image from "next/image";
import profilePic from "../assets/profile.png";
import Link from "next/link";

interface BlogListItemProps {
  title: string;
  content: string;
  createdAt: Date;
  id: string;
}

const BlogListItem: React.FC<BlogListItemProps> = ({
  title,
  content,
  createdAt,
  id,
}) => {
  const date = new Date(createdAt);
  return (
    <Link href={`/blog/${id}`} className="md:w-1/3">
      <div className="flex flex-col space-y-2 border-b-[1px] border-b-gray-200 py-5">
        <div className="flex text-sm text-text-gray items-center space-x-1.5">
          <Image
            src={profilePic}
            alt="User Image"
            width={23}
            height={23}
            className="rounded-full"
          />
          <span>Abhishek Yadav</span>
          <span>&bull;</span>
          <span className="text-light-gray">
            {date.getDate() +
              " " +
              date.toLocaleString("default", { month: "long" }) +
              ", " +
              date.getFullYear()}
          </span>
        </div>
        <div className="font-bold text-lg">{title}</div>
        <div className="whitespace-pre-line">
          {content.substring(0, 100) + "..."}
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
