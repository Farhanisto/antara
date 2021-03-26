import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/ '
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
       <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


