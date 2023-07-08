import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { gql, useMutation } from "@apollo/client";

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
    });
  };

  return (
    <div className="flex flex-col w-1/2 px-48 mt-20 space-y-7">
      <input
        type="text"
        placeholder="Title"
        className="px-6 py-4 outline-none"
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <textarea
        placeholder="Post Content"
        className="px-6 py-4 outline-none whitespace-pre-wrap"
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default NewPost;
