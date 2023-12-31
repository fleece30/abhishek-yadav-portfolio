import React from "react";
import apollo from "@/lib/apollo";
import { gql } from "@apollo/client";
import BlogListItem from "@/components/BlogListItem";

interface BlogProps {
  data: any;
}

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

const getPostsQuery = gql`
  query GetPostsQuery {
    posts {
      id
      title
      content
      createdAt
    }
  }
`;
const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className="flex flex-col px-5 md:px-32 my-24">
      <div className="flex flex-col md:w-3/5">
        <span className="text-3xl font-bold">Blog</span>
        {data.posts.map((item: Post, index: number) => (
          <BlogListItem
            key={index}
            id={item.id}
            title={item.title}
            content={item.content}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await apollo.query({
    query: getPostsQuery,
    fetchPolicy: "no-cache",
  });
  return {
    props: {
      data,
    },
  };
};
export default Blog;
