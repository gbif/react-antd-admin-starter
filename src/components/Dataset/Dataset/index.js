import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DatasetMenu from './DatasetMenu'
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../../NotFound'
import DatasetDetails from './Details'
import ContactList from './ContactList'
import DataQuery from '../../DataItem'
import { getDecoratedDataset } from '../../../api/datasetSearch'

class Dataset extends React.Component {
  render() {
    const { match, data, loading } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        {!loading && <Route path="/:type?/:key?/:section?" render={props => (
          <DatasetMenu dataset={data.dataset} constituents={data.constituents}>
            <Switch>
              <Route exact path={`${match.path}`} component={DatasetDetails} />
              <Route path={`${match.path}/contact`} render={(props) => <ContactList contacts={data.dataset.contacts}/>} />
              <Route path={`${match.path}/constituents`} component={() => <h1>constituents</h1>} />
              <Route component={NotFound}/>
            </Switch>
          </DatasetMenu>
        )}
        />}

        {loading && <Spin size="large" />}
      </React.Fragment>
    )
  }
}

const RoutedDataset = withRouter(Dataset)

const DecoratedDataset = (props) => {
  return <DataQuery 
    api={getDecoratedDataset} 
    query={props.match.params.key} 
    render={props => <RoutedDataset {...props}/>} />
}

export default withRouter(DecoratedDataset)