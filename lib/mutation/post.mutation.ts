import { builder } from "../builder";
import { prisma } from "../prisma";

builder.mutationField("createpost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      title: t.arg.string({ required: true }),
      content: t.arg.string({ required: true }),
      userEmail: t.arg.string({ required: true }),
    },
    //@ts-ignore
    resolve: async (query, parent, _args) => {
      return prisma.post.create({
        ...query,
        data: {
          title: _args.title,
          content: _args.content,
          likes: 0,
          user: {
            connect: { email: _args.userEmail },
          },
        },
      });
    },
  })
);

builder.mutationField("deletepost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      postId: t.arg.string({ required: true }),
    },
    //@ts-ignore
    resolve: async (query, _parent, _args, _info) => {
      return prisma.post.delete({
        ...query,
        where: {
          id: _args.postId,
        },
      });
    },
  })
);

builder.mutationField("updatelikecount", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      postId: t.arg.string({ required: true }),
      newLikeCountDelta: t.arg.int({ required: true }),
    },
    //@ts-ignore
    resolve: async (query, _parent, _args, _info) => {
      return prisma.post.update({
        ...query,
        where: {
          id: _args.postId,
        },
        data: {
          likes: {
            increment: _args.newLikeCountDelta,
          },
        },
      });
    },
  })
);
