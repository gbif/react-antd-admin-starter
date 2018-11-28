import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Home from './Home'

import { DatasetSearch, DatasetDeleted, DatasetDuplicate, DatasetWithNoEndpoint } from './search/DatasetSearch'
import { OrganizationSearch, OrganizationDeleted, OrganizationNonPublishing } from './search/OrganizationSearch'
import { InstallationSearch, InstallationDeleted, InstallationNonPublishing } from './search/InstallationSearch'
import { NodeSearch } from './search/NodeSearch'
import { UserSearch } from './search/UserSearch'

import Dataset from './Dataset'
import Layout from './Layout'

class AppContent extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/organization/search" component={OrganizationSearch} />
          <Route exact path="/organization/deleted" component={OrganizationDeleted} />
          <Route exact path="/organization/nonPublishing" component={OrganizationNonPublishing} />

          <Route exact path="/dataset/search" component={DatasetSearch} />
          <Route exact path="/dataset/deleted" component={DatasetDeleted} />
          <Route exact path="/dataset/duplicate" component={DatasetDuplicate} />
          <Route exact path="/dataset/withNoEndpoint" component={DatasetWithNoEndpoint} />
          <Route path="/dataset/:key" component={Dataset} />

          <Route exact path="/installation/search" component={InstallationSearch} />
          <Route exact path="/installation/deleted" component={InstallationDeleted} />
          <Route exact path="/installation/nonPublishing" component={InstallationNonPublishing} />

          <Route exact path="/node/search" component={NodeSearch} />
          <Route exact path="/user/search" component={UserSearch} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default AppContent