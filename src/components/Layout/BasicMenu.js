
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import injectSheet from 'react-jss';
import { FormattedMessage } from 'react-intl'
import { Menu, Icon } from 'antd';
import Logo from './Logo'

const SubMenu = Menu.SubMenu;
const styles = {
  
};

class BasicMenu extends Component {
  render() {
    const {location} = this.props;
    return (
      <React.Fragment>
        <div className="logo">
          <a href="/">
            <Logo />
            <h1>GBIF Registry</h1>
          </a>
        </div>
        <Menu
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname.split('/')[1]]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <SubMenu key="dataset" title={<span><Icon type="mail" /><span><FormattedMessage id="menu_dataset" defaultMessage="Dataset" /></span></span>}>
            <Menu.Item key="/dataset/search">
              <NavLink to="/dataset/search">
                <FormattedMessage id="menu_datasetSearch" defaultMessage="Search" />
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/dataset/deleted">
              <NavLink to="/dataset/deleted">
                <FormattedMessage id="menu_datasetDeleted" defaultMessage="Deleted" />
              </NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(injectSheet(styles)(BasicMenu));