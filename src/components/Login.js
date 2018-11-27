import React from 'react'
import injectSheet from 'react-jss'
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const FormItem = Form.Item;

const styles = theme => ({
  background: {
    backgroundImage: "url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')"
  },
  layout: {
    minHeight: '100vh'
  },
  loginArea: {
    margin: '0 auto',
    width: 360,
    maxWidth: '100%'
  }
})

class Login extends React.Component {
  render() {
    const { classes } = this.props
    console.log(classes);
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout style={{minHeight: '100vh'}}>
        <Content>
          <div className={classes.loginArea}>
            <div className={classes.loginBox}>
              hej
            </div>
          </div>
        </Content>
      </Layout>
      
    )
  }
}

const WrappedNormalLoginForm = Form.create()(injectSheet(styles)(Login));

export default WrappedNormalLoginForm;
