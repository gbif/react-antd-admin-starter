import React from 'react'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  const name = 'Benny'
  const unreadCount = 21
  return (
    <div style={{ padding: 24, background: 'white' }}>
      <p>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hej {name}, you have {unreadCount, number} {unreadCount, plural,
          one {message}
          other {messages}
        }`}
          values={{ name: <b>{name}</b>, unreadCount }}
        />
      </p>

      <p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p><p>sdfjh</p><p>aa</p>
    </div>
  )
}

export default Home