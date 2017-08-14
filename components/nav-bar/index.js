const React = require('react')
const Media = require('react-responsive')

const initialState = require('../../state')
const LangBox = require('./lang-box')
const ExpandTab = require('../side-bar/expand-tab')

class NavBar extends React.Component {

  render () {

    const state = this.props.state || initialState
    const { selectedLang } = state

    return (
      <div id='navBar'>
        <Media query='(max-width: 750px)'>
          <ExpandTab {...this.props}/>
        </Media>
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
