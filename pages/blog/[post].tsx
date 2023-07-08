import React from "react";
import { gql } from "@apollo/client";
import apollo from "@/lib/apollo";

interface PostProps {
  data: Post;
}

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

const getPostByIdQuery = gql`
  query GetPostByIdQuery($postId: String!) {
    postbyid(postId: $postId) {
      id
      title
      content
      createdAt
    }
  }
`;

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-5 my-32 px-5 w-full md:w-1/2">
        <span className="font-bold text-3xl">{data.title}</span>
        <span className="whitespace-pre-line">{data.content}</span>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  // const { data } = await apollo.query({
  //   query: getPostByIdQuery,
  //   variables: {
  //     postId: context.params.post,
  //   },
  // });
  // console.log(data);
  const data = {
    postbyid: {
      __typename: "Post",
      id: "64a822d119e5695955906c43",
      title: "The ghosts of childhood",
      content:
        "The ghosts of many childhoods,\n" +
        "Roam this house of yore.\n" +
        "Reliving tales of a time long gone,\n" +
        "Of gully cricket and of stapu and more.\n" +
        "\n" +
        "To dancing in the rain and,\n" +
        "The pakodas we used to adore,\n" +
        "To a new book and home-grown mangoes,\n" +
        "Take me back once more.",
      createdAt: "2023-07-07",
    },
  };
  return {
    props: {
      data: data.postbyid,
    },
  };
};

export default Post;
