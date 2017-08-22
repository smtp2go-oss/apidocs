const React = require('react')
const ReactDOM = require('react-dom')
const renderHTML= require('react-render-html')

const intitialState = require('../../../state')
const constructResponses = require('../operations/construct-responses')
const responses = require('../../../exampleApi')

class EmailCycle extends React.Component {

  render () {

    const dispatch = this.props.dispatch
    const state = this.props.state || intitialState
    const { toggleBoxes } = state

    return (
      <div>
        {constructResponses(responses, 'statistics', 'stats/email_cycle', dispatch, toggleBoxes)}
      </div>
    )
  }
}


module.exports = EmailCycle
