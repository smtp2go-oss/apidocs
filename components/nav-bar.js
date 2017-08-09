const React = require('react')
const { connect } = require('react-redux')

class NavBar extends React.Component {

  render () {
    return (
      <div id='navBar'>
        <img
          src='http://www.weboniks.com/images/logos/logo5.jpg'
          id='navLogo'
        ></img>
      </div>
    )
  }
}



module.exports = NavBar
