import React, { Component } from 'react'
import Media from 'react-responsive'

const NavBar = require('../components/nav-bar')
const SideBar = require('../components/side-bar')
const Footer = require('../components/footer')
const MainPage = require('../components/main-page')
const SideBarMobile = require('../components/side-bar/mobile')
const ExpandTab = require('../components/side-bar/expand-tab')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <NavBar {...this.props}/>
        <Media query='(max-width: 900px)'>
          <SideBarMobile {...this.props}/>
        </Media>
        <Media query='(min-width: 900px)'>
          <SideBar {...this.props}/>
        </Media>
        <MainPage {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }

}

export default App
