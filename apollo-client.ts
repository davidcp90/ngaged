import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

 const client: any = () => new ApolloClient({
     link: new HttpLink({
       uri: "https://flowing-koala-12.hasura.app/v1/graphql",
       headers: {
         "x-hasura-admin-secret": 'pbvM0a7eaf30pYRs1fHtKHNrxUK8DrYogug8LiQmfGWabpDzjh3h2T1IxexSAVIh',
       },
     }),
     cache: new InMemoryCache(),
   });

export default client;