import React from 'react';
import {render} from 'react-dom';

import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/ ',
  cache: new InMemoryCache()
});
const Index = () => (
  <ApolloProvider client = {client}>
       <App/> 
       
    </ApolloProvider>
)
render(<Index/>,
  document.getElementById('root')
);


