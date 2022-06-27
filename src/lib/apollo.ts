import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o812xz12hr01z7afe4ej67/master',
  cache: new InMemoryCache()
})