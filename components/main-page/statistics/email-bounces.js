const React = require('react')
const renderHTML= require('react-render-html')

const intitialState = require('../../../state')
const constructSchemaBox = require('../operations/construct-schema-box')
const constructExampleBox = require('../operations/construct-example-box')

const { getHtml } = require('../../../services/get-html')

class EmailBounces extends React.Component {

  render () {
    const dispatch = this.props.dispatch
    const state = this.props.state || intitialState
    const { toggleBoxes } = state

    const parametersDisplay = toggleBoxes.statistics['/email_bounces'].parameters === 'schema'
      ? constructSchemaBox({
          api_key: {
            name: 'api_key',
            type: 'string',
            description: 'A full API Key from the API Keys admin console.'
          }
        })
      : constructExampleBox({
        "api_key": "api-554407F347FB4689A35C07377E61B7D5"
      })

    const openBrace = '{'
    const indent = (<span>&nbsp;&nbsp;</span>)
    const styles = {
      parameters: {
        example: {},
        schema: {}
      }
    }

    return (
      <div>
        <h4>Report on email bounce statistics</h4>
        <p>Rate limited to 1 request(s) per 60 seconds</p>
        <h5>Request Example</h5>
        {constructSchemaBox({
          api_key: {
            name: 'api_key',
            type: 'string',
            description: 'A full API Key from the API Keys admin console.'
          }
        })}
        <h5>Response Example</h5>
        {constructSchemaBox({
          data: {
            emails: {
            name: 'emails',
            type: 'integer',
            description: 'The total number of emails send during the last 30 day period'
          },
          rejects: {
            name: 'rejects',
            type: 'integer',
            description: 'How many of those emails sent were rejected'
          },
          softbounces: {
            name: 'softbounces',
            type: 'integer',
            description: 'How many of those rejects were softbounces'
          },
          hardbounces: {
            name: 'hardbounces',
            type: 'integer',
            description: 'How many of those emails were hardbounces'
          },
          bounce_percent: {
            name: 'bounce_percent',
            type: 'string',
            description: 'Percentage of emails sent that were bounced'
          }
        },
        request_id: {
          name: 'request_id',
          type: 'string',
          description: 'A Unique ID for this request'
        }
        })}
        <button>Try it out</button>
        <h4>Parameters</h4>
        <p>
          <span><strong>body</strong></span>
          {indent}
          <span>object</span>
          <i>&nbsp;&nbsp;required</i>
        </p>
        <div
          className='toggleBox'
          style={styles.parameters.schema}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: 'statistics',
              section: '/email_bounces',
              subsection: 'parameters',
              value: 'schema'
            }
          })}
        >
          Schema
        </div>
        <div
          className='toggleBox'
          style={styles.parameters.example}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: 'statistics',
              section: '/email_bounces',
              subsection: 'parameters',
              value: 'example'
            }
          })}
        >
          Example
        </div>
        {parametersDisplay}
        <h4>Responses</h4>
        <p style={{color: 'green'}}>200</p>
        <p>The request succeeded</p>
        <span>Schema</span><span>Example</span> //add onclick toggle to diplay below
        <pre>
        {openBrace}<br/>
        {indent}data: {openBrace}<br/>
        {indent}{indent}emails: <span className='typeText'>integer</span><br/>
        {indent}{indent}<span className='descriptionText'>The total number of emails send during the last 30 day period</span><br/>
        {indent}{indent}rejects: <span className='typeText'>integer</span><br/>
        {indent}{indent}<span className='descriptionText'>How many of those emails sent were rejected</span><br/>
        {indent}{indent}softbounces: <span className='typeText'>integer</span><br/>
        {indent}{indent}<span className='descriptionText'>How many of those rejects were softbounces</span><br/>
        {indent}{indent}hardbounces: <span className='typeText'>integer</span><br/>
        {indent}{indent}<span className='descriptionText'>How many of those emails were hardbounces</span><br/>
        {indent}{indent}bounce_percent: <span className='typeText'>string</span><br/>
        {indent}{indent}<span className='descriptionText'>Percentage of emails sent that were bounced</span><br/>
        {indent}}<br/>
        {indent}request_id: <span className='typeText'>string</span><br/>
        {indent}<span className='descriptionText'>A Unique ID for this request</span><br/>
        }
        </pre>
        {
          constructSchemaBox({
            data:	{
              error_code:	{
                name: 'error_code',
                type: 'string',
                description: 'An API Error Code string'
              },
              error: {
                name: 'error',
                type: 'string',
                description: 'An error string'
              }
            },
            request_id: {
              name: 'request_id',
              type: 'string',
              description: 'A Unique ID for this request'
            }
          })
        }
      </div>
    )
  }
}

module.exports = EmailBounces
