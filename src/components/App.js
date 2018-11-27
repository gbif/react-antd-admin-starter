import React, { Component } from 'react'
import { ThemeProvider } from 'react-jss'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import Home from './Home'
import DatasetSearch from './Dataset/DatasetSearch'
import DatasetDeleted from './Dataset/DatasetDeleted'
import Dataset from './Dataset/Dataset'
import AppContent from './AppContent'

import Layout from './Layout'
import BlockingLoader from './BlockingLoader'
import Errors from './Errors'
import Login from './Login'

import './App.css'

// translation of the Antd components - not all languages supported. to support more do pull requests for antd
import { LocaleProvider } from 'antd';

// load the locales needed - notice that this is only for formatting. 
// The messages need of course to be loaded as well. These are placed in the public folder and loaded on demand. 
// English is default and should have its own file so that it isn't in code only (as defaultMessage)
import { IntlProvider, addLocaleData } from 'react-intl'
import da from 'react-intl/locale-data/da'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...da, ...en, ...fr])

const theme = {
  colorPrimary: 'deepskyblue'
}

class App extends Component {
  render() {
    return (
      <IntlProvider locale={this.props.locale.locale} messages={this.props.locale.messages}>
        <LocaleProvider locale={this.props.locale.antLocale}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              {this.props.locale.loading && <BlockingLoader />}
              <Errors />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/" component={AppContent} />
              </Switch>
            </React.Fragment>
          </ThemeProvider>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale
})

export default connect(mapStateToProps)(App);