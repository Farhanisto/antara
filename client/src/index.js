import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Auth from './components/Auth'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/ '
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
       <App/>
       <Auth />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


