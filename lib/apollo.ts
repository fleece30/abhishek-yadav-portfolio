import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://master--vermillion-speculoos-e9583f.netlify.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
