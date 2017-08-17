const React = require('react')
import renderHTML from 'react-render-html'

const { getHtml } = require('../../services/get-html')

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

  componentDidMount(){

    getHtml('index', (err, res) => {
      if(err){
        console.error(err)
      }else{
        const display = JSON.stringify(res.body.html)
        this.props.dispatch({type: 'GET_HTML', payload: display})
      }
    })

  }

  render () {
    const state = this.props.state || intitialState
    const { page, htmlDisplay } = state
    const html = htmlDisplay
      ? renderHTML(htmlDisplay)
      : 'beep boop'
    console.log(htmlDisplay)

    return (
      <div className='smtp2go-doc-container'>
        {html}
      </div>
    )
  }
}

module.exports = Mainpage
