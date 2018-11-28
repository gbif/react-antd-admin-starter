import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Home from './Home'
import { DatasetSearch, DatasetDeleted, DatasetDuplicate, DatasetWithNoEndpoint } from './Dataset/DatasetSearch'
import { OrganizationSearch, OrganizationDeleted } from './Organization/OrganizationSearch'
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
          <Route exact path="/dataset/duplicate" component={DatasetDuplicate} />
          <Route exact path="/dataset/withNoEndpoint" component={DatasetWithNoEndpoint} />
          <Route path="/dataset/:key" component={Dataset} />
          <Route exact path="/organization/search" component={OrganizationSearch} />
          <Route exact path="/organization/deleted" component={OrganizationDeleted} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default AppContent