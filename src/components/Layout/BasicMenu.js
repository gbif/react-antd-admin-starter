
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { Menu, Icon } from 'antd';
import Logo from './Logo'

const SubMenu = Menu.SubMenu;

class BasicMenu extends Component {
  render() {
    const {location, history} = this.props;
    return (
      <React.Fragment>
        <div className="logo">
          <a href="/">
            <Logo />
            <h1>GBIF Registry</h1>
          </a>
        </div>
        <Menu
          onClick={(e) => {history.push(e.key)}} 
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname.split('/')[1]]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <SubMenu key="dataset" title={<span><Icon type="mail" /><span><FormattedMessage id="menu_dataset" defaultMessage="Dataset" /></span></span>}>
            <Menu.Item key="/dataset/search">
              <FormattedMessage id="menu_datasetSearch" defaultMessage="Search" />
            </Menu.Item>
            <Menu.Item key="/dataset/deleted">
              <FormattedMessage id="menu_datasetDeleted" defaultMessage="Deleted" />
            </Menu.Item>
            <Menu.Item key="/dataset/duplicate">
              <FormattedMessage id="menu_datasetDuplicate" defaultMessage="Duplicate" />
            </Menu.Item>
            <Menu.Item key="/dataset/withNoEndpoint">
              <FormattedMessage id="menu_datasetWithNoEndpoint" defaultMessage="With no endpoint" />
            </Menu.Item>
          </SubMenu>

          <SubMenu key="organization" title={<span><Icon type="mail" /><span><FormattedMessage id="menu_organization" defaultMessage="Organization" /></span></span>}>
            <Menu.Item key="/organization/search">
              <FormattedMessage id="menu_organizationSearch" defaultMessage="Search" />
            </Menu.Item>
            <Menu.Item key="/organization/deleted">
              <FormattedMessage id="menu_organizationDeleted" defaultMessage="Deleted" />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(BasicMenu)