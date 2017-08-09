import React, { Component } from 'react'

const NavBar = require('../components/nav-bar')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <NavBar />

      </div>
    )
  }

}

export default App
