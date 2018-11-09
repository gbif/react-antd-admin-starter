import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Menu, Icon, Dropdown } from 'antd';
import StateContext from "../../StateContext";

const styles = {

};

class SelectLang extends PureComponent {
  render() {
    const { classes, setLocale } = this.props;
    const langMenu = (
      <Menu onClick={(e) => {setLocale(e.key)}} >
        <Menu.Item key="en">
          <span role="img" aria-label="English">
            🇬🇧
          </span>{' '}
          English
        </Menu.Item>
        <Menu.Item key="da-DK">
          <span role="img" aria-label="Português">
            🇵🇹
          </span>{' '}
          Dansk
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={langMenu} placement="bottomRight">
        <Icon
          type="global"
          title="title"
        />
      </Dropdown>
    );
  }
}

let HOC = props => (
  <StateContext.Consumer>
    {({ api, locale }) => {
      return <SelectLang {...props} setLocale={api.setLocale} local={locale} />;
    }}
  </StateContext.Consumer>
);

export default injectSheet(styles)(HOC);