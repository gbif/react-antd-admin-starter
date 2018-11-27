import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import injectSheet from 'react-jss';
import { Menu, Icon, Dropdown } from 'antd';
import { changeLocale } from '../../../actions/locale'

const styles = {

};

class SelectLang extends PureComponent {
  render() {
    const { changeLocale } = this.props;
    const langMenu = (
      <Menu onClick={(e) => {changeLocale(e.key)}} >
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

const mapStateToProps = state => ({
  locale: state.locale
})

const mapDispatchToProps = {
  changeLocale: changeLocale,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(SelectLang));