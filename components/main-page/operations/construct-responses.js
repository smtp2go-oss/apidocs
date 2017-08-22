const React = require('react')
const renderHTML= require('react-render-html')

const intitialState = require('../../../state')
const constructSchemaBox = require('./construct-schema-box')
const constructExampleBox = require('./construct-example-box')

function constructResponses (responses, page, section, dispatch, toggleBoxes) {
  
  const parametersDisplay = toggleBoxes[page][section].parameters === 'schema'
    ? constructSchemaBox(responses.parameters.schema)
    : constructExampleBox(responses.parameters.example)

  const response200Display = toggleBoxes[page][section].response200 === 'schema'
    ? constructSchemaBox(responses.response200.schema)
    : constructExampleBox(responses.response200.example)

  const response400Display = toggleBoxes[page][section].response400 === 'schema'
    ? constructSchemaBox(responses.response400.schema)
    : constructExampleBox(responses.response400.example)

  const response429Display = toggleBoxes[page][section].response429 === 'schema'
    ? constructSchemaBox(responses.response429.schema)
    : constructExampleBox(responses.response429.example)

  const openBrace = '{'
  const indent = (<span>&nbsp;&nbsp;</span>)
  let styles = {
    parameters: {
      example: {backgroundColor: null},
      schema: {backgroundColor: null}
    },
    response200: {
      example: {backgroundColor: null},
      schema: {backgroundColor: null}
    },
    response400: {
      example: {backgroundColor: null},
      schema: {backgroundColor: null}
    },
    response429: {
      example: {backgroundColor: null},
      schema: {backgroundColor: null}
    }
  }

  function constructHtmlBox (responses, page, section, subsection, display) {
    return (
      <div>
        <div
          className='toggleBox'
          style={styles[subsection].schema}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: page,
              section: section,
              subsection: subsection,
              value: 'schema'
            }
          })}
        >
          Schema
        </div>
        <div
          className='toggleBox'
          style={styles[subsection].example}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: page,
              section: section,
              subsection: subsection,
              value: 'example'
            }
          })}
        >
          Example
        </div>
        <div
          className='schemaBox'
        >
          {display}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h4>{responses.header}</h4>
      <p>{responses.description}</p>
      <h5>Request Example</h5>
      <div className='schemaBox'>
        {constructExampleBox(responses.requestExample)}
      </div>
      <h5>Response Example</h5>
      <div className='schemaBox'>
        {constructExampleBox(responses.responseExample)}
      </div>
      <button>Try it out</button>
      <h4>Parameters</h4>
      <p>
        <span><strong>body</strong></span>
          {indent}
        <span>object</span>
        <i>&nbsp;&nbsp;required</i>
      </p>
      {constructHtmlBox(responses, page, section, 'parameters', parametersDisplay)}
      <h4>Responses</h4>
      <p style={{color: 'green'}}>200</p>
      <p>The request succeeded</p>
      {constructHtmlBox(responses, page, section, 'response200', response200Display)}
      <p style={{color: 'orange'}}>400</p>
      <p>An error occurred</p>
      {constructHtmlBox(responses, page, section, 'response400', response400Display)}
      <p style={{color: 'orange'}}>429</p>
      <p>Too many calls were made to this endpoint within the specified time frame</p>
      {constructHtmlBox(responses, page, section, 'response429', response429Display)}
    </div>
  )
}

module.exports = constructResponses
