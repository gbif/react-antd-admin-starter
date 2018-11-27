import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Menu, Row } from 'antd';

const DatasetMenu = (props) => {
  const { children, dataset, match, constituents } = props
  const { contacts } = dataset

  return (
    <div style={{ background: 'white' }}>
      <Row type="flex" justify="start">
        <Menu
          // onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={[match.params.section || 'overview']}
          mode="inline"
        >
          <Menu.Item key="overview"><NavLink to={`/dataset/${match.params.key}`}>Overview</NavLink></Menu.Item>
          <Menu.Item key="contact"><NavLink to={`/dataset/${match.params.key}/contact`}>Contacts ({contacts.length})</NavLink></Menu.Item>
          <Menu.Item key="constituents"><NavLink to={`/dataset/${match.params.key}/constituents`}>Constituents datasets ({constituents.count})</NavLink></Menu.Item>
        </Menu>
        <div style={{ padding: 16, width: 'calc(100% - 256px)' }}>
          {children}
        </div>
      </Row>
    </div>
  )
}

export default withRouter(DatasetMenu)