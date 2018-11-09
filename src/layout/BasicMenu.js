
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Menu, Icon } from 'antd';
import StateContext from "../StateContext";
import Logo from './Logo'

const SubMenu = Menu.SubMenu;
const styles = {
  
};

class BasicMenu extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <div className="logo">
          <a href="/">
            <Logo />
            <h1>GBIF sitename</h1>
          </a>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="hdd" />
            <span>Lorem</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="share-alt" />
            <span>Ipsum</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="cloud" />
            <span>Dolores</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Sit amet</span></span>}>
            <Menu.Item key="5">Consectetur</Menu.Item>
            <Menu.Item key="6">Adipiscing</Menu.Item>
            <Menu.Item key="7">Eiusmod</Menu.Item>
            <Menu.Item key="8">Tempor incididunt</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Ut labore</span></span>}>
            <Menu.Item key="9">Magna</Menu.Item>
            <Menu.Item key="10">Something</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Deep link</Menu.Item>
              <Menu.Item key="12">Hard to find this one</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="13">
            <Icon type="user" />
            <span>Consequat</span>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

let HOC = props => (
  <StateContext.Consumer>
    {({  }) => {
      return <BasicMenu {...props} />;
    }}
  </StateContext.Consumer>
);

export default injectSheet(styles)(HOC);