import React, { Component } from 'react';
import StateContext from './StateContext';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import locales from './locales';
import './App.css';
import Layout from './layout';
import BlockingLoader from './components/BlockingLoader';

// load the locales needed - notice that this is only for formatting. 
// The messages need of course to be loaded as well. These are placed in the public folder and loaded on demand. 
// English is default and should have its own file so that it isn't in code only (as defaultMessage)
import da from 'react-intl/locale-data/da';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
addLocaleData([...da, ...en, ...ar]);

class App extends Component {
  constructor(props) {
    super(props);

    this.setLocale = this.setLocale.bind(this);

    // Currently no support for rtl in Ant https://github.com/ant-design/ant-design/issues/4051
    this.state = {
      api: {
        setLocale: this.setLocale
      },
      locale: 'en',
      name: 'Erik',
      unreadCount: 1000
    };
  }

  componentDidMount() {
    this.setLocale(this.state.locale);
  }

  setLocale(locale) {
    // check if valid locale
    // Start loading translated messages
    this.setState({
      loading: true
    });
    locales.getMessages(locale)
      .then(response => {
        this.setState({
          messages: response.data, loading: false,
          locale: locale
        });
      })
      .catch(err => {
        console.error('Unable to load locale : ' + locale);
        console.error(err);
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { name, unreadCount } = this.state;
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <StateContext.Provider value={this.state}>
          {this.state.loading && <BlockingLoader />}
          <Layout>
            <div style={{ padding: 24, background: 'white' }}>
              Something goes here
  
            <p>
                <FormattedMessage
                  id="welcome"
                  defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                  one {message}
                  other {messages}
                }`}
                  values={{ name: <b>{name}</b>, unreadCount }}
                />
              </p>

              <p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p>
            </div>
          </Layout>
        </StateContext.Provider>
      </IntlProvider>
    );
  }

}

export default App;