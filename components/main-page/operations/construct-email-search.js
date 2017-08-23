const React = require('react')
const renderHTML= require('react-render-html')

const intitialState = require('../../../state')
const constructSchemaBox = require('./construct-schema-box')
const constructExampleBox = require('./construct-example-box')
const constructHtmlBox = require('./construct-html-box')

function constructEmailSearch(responses, page, section, dispatch, toggleBoxes) {

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

  Object.keys(styles).forEach(styleSection => {
    if (toggleBoxes[page][section][styleSection] === 'schema'){
      styles[styleSection].schema.backgroundColor = '#3bd'
    }else{
      styles[styleSection].example.backgroundColor = '#3bd'
    }
  })

  return (
    <div>
    <h2
    className='sectionHeader'
    >
    <span style={{color: 'green'}}>POST </span>
    <span>{section}</span>
    </h2>
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
    <span>&nbsp;&nbsp;</span>
    <span style={{color: 'blue'}}>object</span>
    <i>&nbsp;&nbsp;required</i>
    </p>
    {constructHtmlBox(responses, page, section, 'parameters', parametersDisplay, styles)}
    <h4>Responses</h4>
    <p style={{color: 'green'}}>200</p>
    <p>The request succeeded</p>
    {constructHtmlBox(responses, page, section, 'response200', response200Display, styles)}
    <p style={{color: 'orange'}}>400</p>
    <p>An error occurred</p>
    {constructHtmlBox(responses, page, section, 'response400', response400Display, styles)}
    <p style={{color: 'orange'}}>429</p>
    <p>Too many calls were made to this endpoint within the specified time frame</p>
    {constructHtmlBox(responses, page, section, 'response429', response429Display, styles)}
    </div>
  )
}

module.exports = constructEmailSearch
