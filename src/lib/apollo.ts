import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qh9g1k43fb01z40x2n3g56/master',
    cache: new InMemoryCache()
})