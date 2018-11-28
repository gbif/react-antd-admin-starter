import React from 'react'
import { Row, Col, Switch, Button } from 'antd'
import Presentation from './Presentation'
import Form from './Form'
import axios from 'axios'
import setHeaders from '../../../../api/setHeaders'

class IdentifierDetails extends React.Component {
  constructor(props) {
    super(props)
    //props: onChange, endpointRoot, optionalData, options(deletable, editable)
    this.state = {
      loading: false,
      error: false,
      edit: false
    }
    if (this.props.data) {

    }
  }

  updateData() {
    if (this.props.key) {
      this.setState({loading: true, error: false})
      axios.get(`${this.props.endpoint}/${this.props.key}`, {
        headers: setHeaders()
      }).then(res => {
        this.setState({data: res.data, loading: false, error: false})
      }).catch(err => {
        this.setState({loading: false, error: true, data: undefined})
      })
    }
  }

  render() {
    const { data, editable, deletable, onChange } = this.props
    return (
      <React.Fragment>
        <div style={{maxWidth: 800}}>
          {(editable || deletable) && <Row style={{marginBottom: 16}}>
            {editable && <Col span={12}>
              <Switch checkedChildren="Edit" unCheckedChildren="Edit" onChange={(val) => this.setState({edit: val})} checked={this.state.edit}/>
            </Col>}
            {deletable && <Col span={editable ? 12 : 24} style={{textAlign: 'right'}}>
              <Button type="danger">Delete</Button>
            </Col>}
          </Row>}
          {!this.state.edit && <Presentation data={data}/>}
          {this.state.edit && <Form data={data} onChange={onChange}/>}
        </div>
      </React.Fragment>
    )
  }
}

export default IdentifierDetails

//usage <IdentifierDetails data={data} editable deletable />
//usage <IdentifierDetails /> 