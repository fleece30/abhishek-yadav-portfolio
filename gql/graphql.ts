/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postedBy: Scalars['String']['output'];
};

/** The mutation root type. */
export type Mutation = {
  __typename?: 'Mutation';
  addcomment: Comment;
  createpost: Post;
  deletepost: Post;
  updatelikecount: Post;
};


/** The mutation root type. */
export type MutationAddcommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  postedBy?: InputMaybe<Scalars['String']['input']>;
};


/** The mutation root type. */
export type MutationCreatepostArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};


/** The mutation root type. */
export type MutationDeletepostArgs = {
  postId: Scalars['String']['input'];
};


/** The mutation root type. */
export type MutationUpdatelikecountArgs = {
  newLikeCountDelta: Scalars['Int']['input'];
  postId: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  likes: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  user: User;
};

/** The query root type. */
export type Query = {
  __typename?: 'Query';
  postbyid: Post;
  posts: Array<Post>;
  users: Array<User>;
};


/** The query root type. */
export type QueryPostbyidArgs = {
  postId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts: Array<Post>;
};
