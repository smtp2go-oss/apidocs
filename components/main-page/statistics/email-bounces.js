const React = require('react')
const renderHTML= require('react-render-html')

const { getHtml } = require('../../../services/get-html')

class EmailBounces extends React.Component {

  componentDidMount(){

  }

  render () {
    //the indenture of this is out because renderHTML takes the literal indenture
    //from the page and applies it to the html, great module aside from that...
    function constructSchemaBox(schema){
      const openBrace = '{'
      const htmlObject = (
        <pre>
          {openBrace}
          {Object.keys(schema).map(key => {
            let htmlString = null
            if(schema[key].type){
              htmlString = `
    ${schema[key].name}: <span className='typeText'>${schema[key].type}</span>
    <span className='descriptionText'>${schema[key].description}</span>
}
              `
            }else{
              htmlString = `
  ${key}: {
    ${constructHtmlObject(schema[key])}
  },
              `
            }
            return renderHTML(htmlString)
          })}
        </pre>
      )
      return (
        <div>
          {htmlObject}
        </div>
      )
    }


    function constructHtmlObject (obj) {
        return `
        ${Object.keys(obj).map(key => {
          return `
    ${key}: <span className='typeText'>${obj[key].type}</span>
    <span className='descriptionText'>${obj[key].description}</span>
          `
        })}
        `
    }

    const openBrace = '{'
    const indent = (<span>&nbsp;&nbsp;</span>)

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
          <span><strong class="ng-binding">body</strong></span>
          {indent}
          <span data-parameter-type="object"><span class="ng-binding">object</span></span>
          <i ng-show="parameter.required" class="">&nbsp;&nbsp;required</i>
        </p>
        <span>Schema</span><span>Example</span> //add onclick toggle to diplay below
        <pre>
          {openBrace}<br/>
          {indent}"api_key": <span className='typeText'>string</span><br/>
          {indent}<span className='descriptionText'>A full API Key from the API Keys admin console.</span><br/>
          }
        </pre>
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
