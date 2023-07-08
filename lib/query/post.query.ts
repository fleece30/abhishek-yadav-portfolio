import { builder } from "../builder";
import { prisma } from "../prisma";

builder.queryField("posts", (t) =>
  t.prismaField({
    type: ["Post"],
    resolve: async (query, _parents, _args, _info) => {
      return prisma.post.findMany({ ...query });
    },
  })
);

builder.queryField("postbyid", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      postId: t.arg.string({ required: true }),
    },
    // @ts-ignore
    resolve: async (query, _parents, _args, _info) => {
      return prisma.post.findUnique({ ...query, where: { id: _args.postId } });
    },
  })
);
