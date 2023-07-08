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

    resolve: async (query, parent, args) => {
      return prisma.post.create({
        ...query,
        data: {
          title: args.title,
          content: args.content,
          likes: 0,
          user: {
            connect: { email: args.userEmail },
          },
        },
      });
    },
  })
);
