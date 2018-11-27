import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DatasetMenu from './DatasetMenu'
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { loadDataset } from '../../../actions/dataset'
import NotFound from '../../NotFound'
import DatasetDetails from './Details'
import ContactList from './ContactList'

// import {}

class Dataset extends React.Component {
  componentDidMount() {
    this.loadData()
  }

  loadData(){
    this.props.loadDataset(this.props.match.params.key)
  }

  render() {
    const { match, dataset } = this.props
    const { dataset: datasetContent, constituents } = dataset

    return (
      <React.Fragment>
        {!dataset.loading && datasetContent && <Route path="/:type?/:key?/:section?" render={props => (
          <DatasetMenu dataset={datasetContent} constituents={constituents}>
            <Switch>
              <Route exact path={`${match.path}`} component={DatasetDetails} />
              <Route path={`${match.path}/contact`} render={(props) => <ContactList contacts={datasetContent.contacts}/>} />
              <Route path={`${match.path}/constituents`} component={() => <h1>constituents</h1>} />
              <Route component={NotFound}/>
            </Switch>
          </DatasetMenu>
        )}
        />}

        {dataset.loading && <Spin size="large" />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  dataset: state.dataset
})

const mapDispatchToProps = {
  loadDataset: loadDataset,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dataset))
