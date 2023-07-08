import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql/utilities";
import { schema } from "./lib/schema";

const config: CodegenConfig = {
  schema: printSchema(schema),
  // documents: ["lib/**/*.ts"],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
