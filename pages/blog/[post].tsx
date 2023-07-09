import React, { useCallback, useEffect, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import apollo from "@/lib/apollo";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import CallToActionBtn from "@/components/CallToActionBtn";
import { cilBadge, cilCommentBubble } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import _debounce from "lodash/debounce";

interface PostProps {
  data: Post;
}

type Post = {
  likes: number;
  id: string;
  title: string;
  content: string;
  comments: Comment[];
  createdAt: Date;
};

type Comment = {
  comment: string;
};

const getPostByIdQuery = gql`
  query GetPostByIdQuery($postId: String!) {
    postbyid(postId: $postId) {
      id
      title
      likes
      content
      comments {
        comment
      }
      createdAt
    }
  }
`;

const deletePostMutation = gql`
  mutation DeletePostMutation($postId: String!) {
    deletepost(postId: $postId) {
      id
    }
  }
`;

const updatePostLikeCountMutation = gql`
  mutation UpdatePostLikeCountMutation($postId: String!, $newLikeCount: Int!) {
    updatelikecount(postId: $postId, newLikeCount: $newLikeCount) {
      id
      likes
    }
  }
`;

const Post: React.FC<PostProps> = ({ data }) => {
  const [localLikes, setLocalLikes] = useState(data.likes);
  const localLikesRef = useRef(localLikes);
  const { status } = useSession();

  const router = useRouter();
  const [deletePost] = useMutation(deletePostMutation);
  const [updatePostLikeCount] = useMutation(updatePostLikeCountMutation);

  const updateLikeCount = async () => {
    await updatePostLikeCount({
      variables: {
        postId: router.query.post,
        newLikeCount: localLikesRef.current,
      },
    }).then((res) => console.log(res));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLike = useCallback(_debounce(updateLikeCount, 500), []);

  useEffect(() => {
    localLikesRef.current = localLikes;
  }, [localLikes]);

  const handleDelete = async () => {
    await deletePost({
      variables: {
        postId: router.query.post,
      },
    })
      .then(() => router.replace("/blog"))
      .catch((err) => alert(err));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-5 my-32 px-5 w-full md:w-1/2">
        <span className="font-bold text-3xl">{data.title}</span>
        <span className="whitespace-pre-line">{data.content}</span>
        <div className="flex flex-col">
          <span className="w-full justify-center flex space-x-3 my-5">
            <span>&bull;</span>
            <span>&bull;</span>
            <span>&bull;</span>
          </span>
          <div className="flex space-x-10">
            <div className="flex space-x-2 items-center">
              <CallToActionBtn
                onClick={() => {
                  setLocalLikes(localLikes + 1);
                  handleLike();
                }}
                icon={<CIcon icon={cilBadge} height={25} />}
                toolTipText={"Applaud"}
              />
              <span>{localLikes}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <CallToActionBtn
                onClick={() => {}}
                icon={<CIcon icon={cilCommentBubble} height={25} />}
                toolTipText={"Leave a comment..."}
              />
              <span>{data.comments.length}</span>
            </div>
          </div>
          {status === "authenticated" && (
            <Button
              text={"Delete Post"}
              onClick={handleDelete}
              primaryColor={"bg-red-300"}
              hoverColor={"bg-red-500"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { data } = await apollo.query({
    query: getPostByIdQuery,
    variables: {
      postId: context.params.post,
    },
  });
  return {
    props: {
      data: data.postbyid,
    },
  };
};

export default Post;
