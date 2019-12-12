import React, { Component } from 'react';
import Layout from './Layout'
import Search from './search/Search'

import { Route, Switch, Redirect } from 'react-router-dom'
class BakeForcat extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path='/home'
            component={Layout}
          >
          </Route>
          <Route
            path='/search'
            component={Search}
          ></Route>
          <Redirect from='/' to='/home/learn'></Redirect>
          {/* <Redirect from='/home' to='/home/learn'></Redirect> */}
        </Switch>
      </>
    );
  }
}

export default BakeForcat;