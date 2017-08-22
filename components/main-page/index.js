const React = require('react')
const renderHTML= require('react-render-html')

const EmailBounces = require('./statistics/email-bounces')
const EmailCycle = require('./statistics/email-cycle')

const { getHtml } = require('../../services/get-html')

const intitialState = require('../../state')

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

    let html = null //replace null with spinner
    switch (page) {

      case '/readme':
        html = htmlDisplay
          ? renderHTML(htmlDisplay)
          : null
        break;

      case '/stats/email_bounces':
        html = <EmailBounces {...this.props}/>
        break;

      case '/stats/email_cycle':
        html = <EmailBounces {...this.props}/>
        break;

      default:

    }

    return (
      <div className='docContainer'>
        {html}
      </div>
    )
  }
}

module.exports = Mainpage
