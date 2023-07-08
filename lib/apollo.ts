import { ApolloClient, InMemoryCache } from "@apollo/client";
import { endpoint, prodEndpoint } from "@/lib/config";

const uri = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
