import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import injectSheet from 'react-jss';
import { Menu, Icon, Dropdown, Avatar, Modal, Button } from 'antd';
import { addError } from '../../../actions/errors'
import { login, logout } from '../../../actions/user'
import LoginForm from './LoginForm'

const styles = {

};

class UserMenu extends PureComponent {
  state = { visible: false }

  showLogin = () => {
    this.setState({
      visible: true,
    });
  }

  handleLogin = (values) => {
    this.setState({
      visible: false,
    });
    this.props.login(values)
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { classes, user, logout } = this.props;
    let currentUser
    if (user) {
      currentUser = {
        name: user.username,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      };
    }

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]}>
        {/* <Menu.Item key="userinfo">
          <Icon type="setting" />
          account settings
        </Menu.Item>
        <Menu.Divider /> */}
        {user && <Menu.Item key="logout" onClick={() => { logout() }}>
          <Icon type="logout" />
          logout
        </Menu.Item>
        }
        {!user && <Menu.Item key="login" onClick={this.showLogin}>
          <Icon type="login" />
          Login
        </Menu.Item>
        }
      </Menu>
    );

    return (
      <React.Fragment>
        {!user && <span style={{ padding: '0 16px' }}><Button type="primary" onClick={this.showLogin}>
          Login
        </Button></span>}
        {user && <Dropdown overlay={menu}>
          <span style={{ padding: '0 16px' }}>
            <Avatar
              style={{ marginRight: 8 }}
              size="small"
              className={styles.avatar}
              src={currentUser.avatar}
              alt="avatar"
            />
            <span className={styles.name}>{currentUser.name}</span>
          </span>
        </Dropdown>
        }
        <Modal
          title='Login'
          visible={this.state.visible}
          onOk={this.handleLogin}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className={classes.background}>
            <LoginForm
              onLogin={this.handleLogin}
              onCancel={this.handleCancel}
            />
          </div>
        </Modal>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale,
  user: state.user
})

const mapDispatchToProps = {
  addError: addError,
  login: login,
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(UserMenu))