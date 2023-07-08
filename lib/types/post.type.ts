import { builder } from "../builder";

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    content: t.exposeString("content"),
    likes: t.exposeInt("likes"),
    comments: t.relation("comments"),
    user: t.relation("user"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});
