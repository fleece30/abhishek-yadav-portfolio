import { builder } from "./builder";

import "./types/user.type";
import "./types/post.type";
import "./types/comment.type";
import "./query/user.query";
import "./query/post.query";
import "./mutation/post.mutation";

export const schema = builder.toSchema();
