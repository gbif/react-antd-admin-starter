import React from 'react'
import omitBy from 'lodash/omitBy'
import isNil from 'lodash/isNil'

class DataQuery extends React.Component {
  constructor(props) {
    super(props)

    this.fetchData = this.fetchData.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.cancelPromise = this.cancelPromise.bind(this)

    this.state = {
      query: props.initQuery,
      data: {},
      loading: true,
      error: false,
      updateQuery: this.updateQuery,
      fetchData: this.fetchData
    }
  }

  componentWillMount() {
    this.fetchData(this.state.query)
  }

  updateQuery(query) {
    this.setState({
      query
    })
  }

  cancelPromise() {
    if (this.axiosPromise && typeof this.axiosPromise.cancel === 'function') {
      this.axiosPromise.cancel();
    }
  }

  fetchData(query) {
    this.setState({
      loading: true,
      error: false
    })
    this.cancelPromise()

    const cleanedQuery = omitBy({ ...this.state.query, ...query }, x => x === '');// required as grbio endpoints behaves different for empyu query strings than the other endpoints 29/11/2018
    this.axiosPromise = this.props.api(cleanedQuery)

    this.axiosPromise.then(resp => {
      const data = resp.data
      this.setState({
        data,
        loading: false,
        error: false,
      })
    })
      .catch(err => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.render(this.state)}
      </React.Fragment>
    )
  }
}

export default DataQuery
