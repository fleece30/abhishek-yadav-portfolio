import { builder } from "../builder";
import { prisma } from "../prisma";

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, _parents, _args, _info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);
