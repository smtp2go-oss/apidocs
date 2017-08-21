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

    function constructResponses (responses, page, section) {
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
          example: {},
          schema: {}
        },
        response400: {
          example: {},
          schema: {}
        },
        response429: {
          example: {},
          schema: {}
        }
      }

      return (
        <div>
          <h4>Report on email bounce statistics</h4>
          <p>Rate limited to 1 request(s) per 60 seconds</p>
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
          <div
            className='toggleBox'
            style={styles.parameters.schema}
            onClick={() => dispatch({
              type: 'SHOW_SECTION',
              payload: {
                page: page,
                section: section,
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
                page: page,
                section: section,
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
                page: page,
                section: section,
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
                page: page,
                section: section,
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
          <p style={{color: 'orange'}}>400</p>
          <p>An error occurred</p>
          <div
            className='toggleBox'
            style={styles.response400.schema}
            onClick={() => dispatch({
              type: 'SHOW_SECTION',
              payload: {
                page: page,
                section: section,
                subsection: 'response400',
                value: 'schema'
              }
            })}
          >
            Schema
          </div>
          <div
            className='toggleBox'
            style={styles.response400.example}
            onClick={() => dispatch({
              type: 'SHOW_SECTION',
              payload: {
                page: page,
                section: section,
                subsection: 'response400',
                value: 'example'
              }
            })}
          >
            Example
          </div>
          <div
            className='schemaBox'
          >
            {response400Display}
          </div>
          <p style={{color: 'orange'}}>429</p>
          <p>Too many calls were made to this endpoint within the specified time frame</p>
          <div
            className='toggleBox'
            style={styles.response429.schema}
            onClick={() => dispatch({
              type: 'SHOW_SECTION',
              payload: {
                page: page,
                section: section,
                subsection: 'response429',
                value: 'schema'
              }
            })}
          >
            Schema
          </div>
          <div
            className='toggleBox'
            style={styles.response429.example}
            onClick={() => dispatch({
              type: 'SHOW_SECTION',
              payload: {
                page: page,
                section: section,
                subsection: 'response429',
                value: 'example'
              }
            })}
          >
            Example
          </div>
          <div
            className='schemaBox'
          >
            {response429Display}
          </div>
        </div>
      )
    }

    const display = constructResponses({
      requestExample: {
        "api_key": "api-554407F347FB4689A35C07377E61B7D5"
      },
      responseExample: {
        "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
        "data": {
          "emails": 159,
          "rejects": 0,
          "softbounces": 0,
          "hardbounces": 0,
          "bounce_percent": "0.00"
        }
      },
      parameters: {
        schema: {
          api_key: {
            name: 'api_key',
            type: 'string',
            description: 'A full API Key from the API Keys admin console.'
          }
        },
        example: {
          "api_key": "api-554407F347FB4689A35C07377E61B7D5"
        }
      },
      response200: {
        schema: {
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
        },
        example: {
          "request_id": "2917fc07-d685-4fea-b49a-14087058461f",
          "data": {
            "emails": 159,
            "rejects": 0,
            "softbounces": 0,
            "hardbounces": 0,
            "bounce_percent": "0.00"
          }
        }
      },
      response400: {
        schema: {
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
        },
        example: {
          "request_id": "22e5acba-43bf-11e6-ae42-408d5cce2644",
          "data": {
            "error_code": "E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED",
            "error": "You do not have permission to access this API endpoint"
          }
        }
      },
      response429: {
        schema: {
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
        },
        example: {
          "request_id": "22e5acba-43bf-11e6-ae42-408d5cce2644",
          "data": {
            "error_code": "E_ApiResponseCodes.REQ_LIMIT_EXCEEDED",
            "error": "This endpoint is rate limited to 1 request every 60 seconds"
          }
        }
      }
    }, 'statistics', '/email_bounces')


    // if (toggleBoxes.statistics['/email_bounces'].parameters === 'schema'){
    //   styles.parameters.schema.backgroundColor = '#3bd'
    // }else{
    //   styles.parameters.example.backgroundColor = '#3bd'
    // }

    return (
      <div>{display}</div>
    )
  }
}

module.exports = EmailBounces
