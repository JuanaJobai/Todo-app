import React from 'react';
import { View } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Todo from './components/Todo';

export default function App() {

  const client = new ApolloClient({
    uri: "YOUR_HASURA_GRAPHQL_URL",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>

    <View >
      <Todo/>
    </View>

    </ApolloProvider>
  );
}


