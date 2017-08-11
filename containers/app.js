import React, { Component } from 'react'

const NavBar = require('../components/nav-bar')
const SideBar = require('../components/side-bar')
const Footer = require('../components/footer')
const MainPage = require('../components/main-page')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <NavBar {...this.props}/>
        <SideBar {...this.props}/>
        <MainPage {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }

}

export default App
