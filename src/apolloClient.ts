import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ua6nzlb109.execute-api.us-east-1.amazonaws.com',
  cache: new InMemoryCache(),
});

export default client;
