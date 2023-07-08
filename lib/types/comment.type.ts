import { builder } from "../builder";

builder.prismaObject("Comment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    comment: t.exposeID("comment"),
    post: t.relation("post"),
  }),
});
