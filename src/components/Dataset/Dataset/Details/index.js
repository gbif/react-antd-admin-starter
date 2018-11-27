import React from 'react'
import { withRouter } from 'react-router'
import { Row, Col, Switch, Button } from 'antd'
import DatasetPresentation from './DatasetPresentation'
import DatasetForm from './DatasetForm'

class DatasetDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {edit: true}
  }

  render() {
    const { match } = this.props
    return (
      <React.Fragment>
        <div style={{maxWidth: 800}}>
          <Row style={{marginBottom: 16}}>
            <Col span={12}>
              <Switch checkedChildren="Edit" unCheckedChildren="Edit" onChange={(val) => this.setState({edit: val})} checked={this.state.edit}/>
            </Col>
            <Col span={12} style={{textAlign: 'right'}}>
              <Button type="primary">Crawl</Button>
            </Col>
          </Row>
          {!this.state.edit && <DatasetPresentation datasetKey={match.params.key}/>}
          {this.state.edit && <DatasetForm datasetKey={match.params.key}/>}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(DatasetDetails)