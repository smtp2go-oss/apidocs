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

    const response200Display = toggleBoxes.statistics['/email_bounces'].response200 === 'schema'
      ? constructSchemaBox({
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
      })
      : constructExampleBox({
          "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
          "data": {
            "emails": 159,
            "rejects": 0,
            "softbounces": 0,
            "hardbounces": 0,
            "bounce_percent": "0.00"
          }
        })

    const openBrace = '{'
    const indent = (<span>&nbsp;&nbsp;</span>)
    let styles = {
      parameters: {
        example: {backgroundColor: null},
        schema: {backgroundColor: null}
      },
      response200: {
        example: {},
        schema: {}
      }
    }
    if (toggleBoxes.statistics['/email_bounces'].parameters === 'schema'){
      styles.parameters.schema.backgroundColor = '#3bd'
    }else{
      styles.parameters.example.backgroundColor = '#3bd'
    }

    return (
      <div>
        <h4>Report on email bounce statistics</h4>
        <p>Rate limited to 1 request(s) per 60 seconds</p>
        <h5>Request Example</h5>
        <div className='schemaBox'>
          {constructExampleBox({
            "api_key": "api-554407F347FB4689A35C07377E61B7D5"
          })}
        </div>
        <h5>Response Example</h5>
        <div className='schemaBox'>
          {constructExampleBox({
            "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
            "data": {
              "emails": 159,
              "rejects": 0,
              "softbounces": 0,
              "hardbounces": 0,
              "bounce_percent": "0.00"
            }
          })}
        </div>
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
        <div
          className='schemaBox'
        >
          {parametersDisplay}
        </div>
        <h4>Responses</h4>
        <p style={{color: 'green'}}>200</p>
        <p>The request succeeded</p>
        <div
          className='toggleBox'
          style={styles.response200.schema}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: 'statistics',
              section: '/email_bounces',
              subsection: 'response200',
              value: 'schema'
            }
          })}
        >
          Schema
        </div>
        <div
          className='toggleBox'
          style={styles.response200.example}
          onClick={() => dispatch({
            type: 'SHOW_SECTION',
            payload: {
              page: 'statistics',
              section: '/email_bounces',
              subsection: 'response200',
              value: 'example'
            }
          })}
        >
          Example
        </div>
        <div
          className='schemaBox'
        >
          {response200Display}
        </div>
        <div className='schemaBox'>
          {constructSchemaBox({
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
          })}
        </div>
      </div>
    )
  }
}

module.exports = EmailBounces
