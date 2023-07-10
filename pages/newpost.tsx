import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";

interface NewPostProps {}

const createPostMutation = gql`
  mutation CreatePostMutation(
    $title: String!
    $content: String!
    $userEmail: String!
  ) {
    createpost(title: $title, content: $content, userEmail: $userEmail) {
      id
      title
      user {
        id
      }
    }
  }
`;

const NewPost: React.FC<NewPostProps> = ({}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [createPost] = useMutation(createPostMutation);

  const handleSubmit = async () => {
    await createPost({
      variables: {
        title: postTitle,
        content: postContent,
        userEmail: session?.user?.email,
      },
    })
      .then(() => router.replace("/blog"))
      .catch((err) => alert(err));
  };

  return (
    <div className="flex flex-col w-full px-5 text-center md:text-left md:px-48 mt-32 space-y-16">
      <span className="text-3xl font-bold w-full">New blog post</span>
      <div className="flex flex-col items-center w-full space-y-10">
        {/*<input*/}
        {/*  type="text"*/}
        {/*  placeholder="Title"*/}
        {/*  className="px-6 py-4 outline-none border-b-[1px] border-gray-200 md:w-1/2"*/}
        {/*  onChange={(e) => setPostTitle(e.target.value)}*/}
        {/*/>*/}
        <InputField
          type={"text"}
          placeholder={"Title"}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        {/*<textarea*/}
        {/*  placeholder="Post Content"*/}
        {/*  className="px-6 py-4 outline-none whitespace-pre-wrap border-b-[1px] border-gray-200 md:w-1/2 h-72"*/}
        {/*  onChange={(e) => setPostContent(e.target.value)}*/}
        {/*/>*/}
        <TextareaField
          placeholder={"Post content"}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <Button
          text={"Post"}
          onClick={handleSubmit}
          primaryColor={"bg-bg-pink"}
          hoverColor={"bg-pink-400"}
        />
      </div>
    </div>
  );
};

export default NewPost;
