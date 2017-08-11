const React = require('react')

class Footer extends React.Component {

  render () {

    return (
      <div id='footer'>
        <div id='copyright'>
          2017 © SMTP2GO.
        </div>
        <a href='https://twitter.com/smtp2go/'>
          <img
            id='twitterIcon'
            src='https://thebookspyblog.files.wordpress.com/2016/07/twitter-logo.png'
          />
        </a>
        <a href=''>
          <div
            className='footerLink'
            id='footerStatus'
          >
            Status
          </div>
        </a>
        <a href=''>
          <div className='footerLink'>
            Live Chat
          </div>
        </a>
        <a href=''>
          <div className='footerLink'>
            Terms of Service
          </div>
        </a>
        <a href=''>
          <div className='footerLink'>
            Privacy Policy
          </div>
        </a>
      </div>
    )
  }
}

module.exports = Footer
