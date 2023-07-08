import { builder } from "../builder";
import { prisma } from "../prisma";
import { query } from "express";

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
    resolve: async (query, parents, args, info) => {
      return prisma.post.findUnique({ ...query, where: { id: args.postId } });
    },
  })
);
