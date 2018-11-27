import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Home from './Home'
import DatasetSearch from './Dataset/DatasetSearch'
import DatasetDeleted from './Dataset/DatasetDeleted'
import Dataset from './Dataset/Dataset'
import Layout from './Layout'

class AppContent extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dataset/search" component={DatasetSearch} />
          <Route exact path="/dataset/deleted" component={DatasetDeleted} />
          <Route path="/dataset/:key" component={Dataset} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    );
  }
}

export default AppContent