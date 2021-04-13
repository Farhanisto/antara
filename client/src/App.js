import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Signout from './components/Auth/Signout'
import Layout from './components/hocs/Layout'
import Home from './components/Home'

import { useQuery, gql } from '@apollo/client'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signout" component={Signout} />
      </Switch>
    </Layout>
  </Router>
)

export default App
