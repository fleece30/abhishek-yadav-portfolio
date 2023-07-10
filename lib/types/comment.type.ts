import { builder } from "../builder";

builder.prismaObject("Comment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    comment: t.exposeString("comment"),
    postedBy: t.exposeString("postedBy"),
    post: t.relation("post"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});
