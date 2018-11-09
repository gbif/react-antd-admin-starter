
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Layout, Icon, Drawer, Breadcrumb } from 'antd';
import BasicMenu from './BasicMenu'
import SelectLang from './SelectLang'
import UserMenu from './UserMenu'
import enquire from 'enquire.js'
import Logo from './Logo'
import StateContext from "../StateContext";

import './menu.css';

// Currently no support for rtl in Ant https://github.com/ant-design/ant-design/issues/4051
const styles = {
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0
  }
};

const { Header, Sider, Content, Footer } = Layout;
const menuWidth = 256;
const menuCollapsedWidth = 80;

class SiteLayout extends Component {
  constructor(props) {
    super(props);

    this.registerScreenListener = this.registerScreenListener.bind(this);

    this.state = {
      collapsed: true,
      isMobile: false,
    };
  }

  componentWillMount() {
    this.registerScreenListener();
  }

  registerScreenListener() {
    let queryMedium = "screen and (min-width: 600px)";
    let queryLarge = "screen and (min-width: 900px)";
    enquire.register(queryMedium, {
      match: () => { this.setState({ isMobile: false }); },
      unmatch: () => { this.setState({ isMobile: true }) },
    });

    if (!enquire.queries[queryMedium].matches()) {
      this.setState({ isMobile: true });
    }

    enquire.register(queryLarge, {
      match: () => { this.setState({ collapsed: false }) },
      unmatch: () => { this.setState({ collapsed: true }) },
    });

    if (enquire.queries[queryLarge].matches()) {
      this.setState({ collapsed: false });
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const {classes} = this.props;
    let contentMargin = this.state.collapsed ? menuCollapsedWidth : menuWidth;
    if (this.state.isMobile) {
      contentMargin = 0;
    }

    const sideMenu = <React.Fragment>
      {!this.state.isMobile && <Sider
          className={classes.sider}
          width={menuWidth}
          trigger={null}
          reverseArrow={true}
          collapsible
          collapsedWidth={menuCollapsedWidth}
          breakpoint="lg"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          collapsed={this.state.collapsed}
        >
          <BasicMenu collapsed={this.state.collapsed} />
        </Sider>
        }

        {this.state.isMobile && <Drawer
          placement="left"
          closable={false}
          onClose={() => { this.setState({ collapsed: true }) }}
          visible={!this.state.collapsed}
          className="mainMenu__drawer"
        >
          <BasicMenu />
        </Drawer>
        }
    </React.Fragment>;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {sideMenu}
        <Layout style={{ marginLeft: contentMargin + 'px' }}>
          
          <Header style={{ background: '#fff', padding: 0, display: 'flex' }}>
            {this.state.isMobile && <div className="headerLogo"><Logo style={{ height: '100px', flex: '0 0 auto' }} /></div>}
            <Icon
              style={{flex: '0 0 auto'}}
              className="menu-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div style={{flex: '1 1 auto'}}></div>
            <div className="header__secondary" style={{flex: '0 0 auto'}}>
              <UserMenu />
              <SelectLang />
            </div>
          </Header>

          <Breadcrumb style={{ margin: '16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Dataset</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Details</a></Breadcrumb.Item>
            <Breadcrumb.Item>Contacts</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ overflow: 'initial', margin: '0 16px 24px 16px', minHeight: 280 }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Footer content
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


let HOC = props => (
  <StateContext.Consumer>
    {({ locale }) => {
      return <SiteLayout {...props} local={locale} />;
    }}
  </StateContext.Consumer>
);

export default injectSheet(styles)(HOC);