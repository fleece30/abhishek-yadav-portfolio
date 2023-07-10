import React, { useCallback, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import apollo from "@/lib/apollo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import CallToActionBtn from "@/components/CallToActionBtn";
import { cilBadge, cilCommentBubble, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import _debounce from "lodash/debounce";
import Comment from "@/components/Comment";
import CommentBox from "@/components/CommentBox";

interface PostProps {
  data: Post;
}

type Post = {
  likes: number;
  id: string;
  title: string;
  content: string;
  comments: CommentItem[];
  createdAt: string;
};

type CommentItem = {
  comment: string;
  postedBy: string;
  createdAt: string;
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
        postedBy
        createdAt
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
  mutation UpdatePostLikeCountMutation(
    $postId: String!
    $newLikeCountDelta: Int!
  ) {
    updatelikecount(postId: $postId, newLikeCountDelta: $newLikeCountDelta) {
      id
      likes
    }
  }
`;

const postCommentMutation = gql`
  mutation PostCommentMutation(
    $comment: String!
    $postedBy: String!
    $postId: String!
  ) {
    addcomment(comment: $comment, postedBy: $postedBy, postId: $postId) {
      post {
        id
      }
    }
  }
`;

const Post: React.FC<PostProps> = ({ data }) => {
  const [localLikes, setLocalLikes] = useState(data.likes);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const localLikesRef = useRef(0);
  const commentSectionRef = useRef<null | HTMLDivElement>(null);
  const { status } = useSession();

  const router = useRouter();
  const [deletePost] = useMutation(deletePostMutation);
  const [updatePostLikeCount] = useMutation(updatePostLikeCountMutation);
  const [postComment] = useMutation(postCommentMutation);

  const updateLikeCount = async () => {
    await updatePostLikeCount({
      variables: {
        postId: router.query.post,
        newLikeCountDelta: localLikesRef.current,
      },
    }).then(() => {
      localLikesRef.current = 0;
    });
  };

  const handlePostComment = async () => {
    await postComment({
      variables: {
        comment: commentBody,
        postedBy: commentAuthor,
        postId: router.query.post,
      },
    }).then(() => {
      setIsCommentBoxOpen(false);
      setCommentBody("");
      setCommentAuthor("");
      router.replace(router.asPath).then(() => {
        if (commentSectionRef && commentSectionRef.current)
          commentSectionRef.current.scrollIntoView();
      });
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLike = useCallback(_debounce(updateLikeCount, 500), []);

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
          <div className="flex space-x-10" ref={commentSectionRef}>
            <div className="flex space-x-2 items-center">
              <CallToActionBtn
                onClick={() => {
                  setLocalLikes(localLikes + 1);
                  localLikesRef.current++;
                  handleLike();
                }}
                icon={<CIcon icon={cilBadge} height={25} />}
                toolTipText={"Applaud"}
              />
              <span>{localLikes}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <CallToActionBtn
                onClick={() => {
                  setIsCommentBoxOpen(!isCommentBoxOpen);
                }}
                icon={<CIcon icon={cilCommentBubble} height={25} />}
                toolTipText={"Leave a comment..."}
              />
              <span>{data.comments.length}</span>
            </div>
            {status === "authenticated" && (
              <div className="flex space-x-2 items-center">
                <CallToActionBtn
                  onClick={handleDelete}
                  icon={<CIcon icon={cilTrash} height={25} />}
                  toolTipText={"Delete post"}
                />
              </div>
            )}
          </div>
          <CommentBox
            isOpen={isCommentBoxOpen}
            onInputFieldChange={(e) => setCommentAuthor(e.target.value)}
            onTextareaChange={(e) => setCommentBody(e.target.value)}
            inputFieldValue={commentAuthor}
            textAreaValue={commentBody}
            handleCallToAction={handlePostComment}
          />
          <div>
            {data.comments.map((comment, index) => {
              return (
                <Comment
                  key={index}
                  commentBody={comment.comment}
                  postedBy={comment.postedBy}
                  createdAt={new Date(comment.createdAt)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { data } = await apollo.query({
    query: getPostByIdQuery,
    fetchPolicy: "no-cache",
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
