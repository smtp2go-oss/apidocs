const React = require('react')

const LangBox = require('./lang-box')

class NavBar extends React.Component {

  render () {
    const state = this.props.state || {selectedLang: null}
    const { selectedLang } = state
    return (
      <div id='navBar'>
        <img
          src='http://www.weboniks.com/images/logos/logo5.jpg'
          id='navLogo'
        ></img>
        <LangBox {...this.props}/>
      </div>
    )
  }
}

module.exports = NavBar
