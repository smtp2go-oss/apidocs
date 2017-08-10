import React, { Component } from 'react'

const NavBar = require('../components/nav-bar')
const SideBar = require('../components/side-bar')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <NavBar {...this.props}/>
        <SideBar {...this.props}/>
      </div>
    )
  }

}

export default App
