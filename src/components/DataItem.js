import React from 'react'

class DataItem extends React.Component {
  constructor(props){
    super(props)

    this.refresh = this.refresh.bind(this)
    
    this.state = {
      data: {},
      loading: true,
      error: false,
      refresh: this.refresh
    }
  }

  componentWillMount() {
    this.refresh(this.state.query)
  }

  refresh(){
    this.setState({
      loading: true,
      error: false
    })
    
    this.props.api(this.props.query).then(data => {
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
        {this.props.render({...this.props, ...this.state})}
      </React.Fragment>
    )
  }
}

export default DataItem
