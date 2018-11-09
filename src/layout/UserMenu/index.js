import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import StateContext from "../../StateContext";

const styles = {

};

class UserMenu extends PureComponent {

  render() {
    const { classes } = this.props;
    let currentUser = {
      name: 'Bro Timson',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    };

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={(e) => {console.log(e)}}>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          account settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          logout
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <span style={{padding: '0 16px'}}>
          <Avatar
            style={{marginRight: 8}}
            size="small"
            className={styles.avatar}
            src={currentUser.avatar}
            alt="avatar"
          />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </Dropdown>
    );
  }
}

let HOC = props => (
  <StateContext.Consumer>
    {() => {
      return <UserMenu {...props} />;
    }}
  </StateContext.Consumer>
);

export default injectSheet(styles)(HOC);