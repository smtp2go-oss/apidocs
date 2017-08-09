import React, { Component } from 'react'

const TopBar = require('../components/top-bar')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <TopBar />

      </div>
    )
  }

}

export default App
