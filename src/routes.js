import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import HomeContainer from './HomeContainer'
import ForecastContainer from './ForecastContainer'
import Details from './Details'

const routes = (
  <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path='forecast/:city' component={ForecastContainer} />

  </Route>
</Router>
)

export default routes
