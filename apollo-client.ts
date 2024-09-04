import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

 const client: any = () => new ApolloClient({
     link: new HttpLink({
       uri: "HASURA_URL",
       headers: {
         "x-hasura-admin-secret": 'MY_HASURA_KEY',
       },
     }),
     cache: new InMemoryCache(),
   });

export default client;
