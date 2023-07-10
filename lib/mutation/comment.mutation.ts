import { builder } from "../builder";
import { prisma } from "../prisma";

builder.mutationField("addcomment", (t) =>
  t.prismaField({
    type: "Comment",
    args: {
      comment: t.arg.string({ required: true }),
      postedBy: t.arg.string(),
      postId: t.arg.string({ required: true }),
    },
    // @ts-ignore
    resolve: async (query, _parent, _args, _info) => {
      return prisma.comment.create({
        ...query,
        data: {
          comment: _args.comment,
          postedBy: _args.postedBy || "Anonymous",
          post: {
            connect: { id: _args.postId },
          },
        },
      });
    },
  })
);
