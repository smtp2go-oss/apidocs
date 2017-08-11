const React = require('react')

const Readme = require('./readme')
const Statistics = require('./statistics')
const Emails = require('./emails')
const EmailBlocklist = require('./email-blocklist')
const SmtpUsers = require('./smtp-users')

const intitialState = require('../../state')

function setDisplay (page, state) {
  switch (page) {
    case '/readme':
      return <Readme />

      break;

    case '/statistics':
      return <Statistics />

      break;

    case '/emails':
      return <Emails />

      break;

    case '/emailBlocklist':
      return <EmailBlocklist />

      break;

    case '/smtpUsers':
      return <SmtpUsers />

      break;

    default:
      return

  }
}

class Mainpage extends React.Component {

  render () {
    const state = this.props.state || intitialState
    const { page } = state

    const display = setDisplay(page, state)
    return (
      <div id='mainPage'>
        {display}
      </div>
    )
  }
}

module.exports = Mainpage
