const React = require('react')
const renderHTML= require('react-render-html')

const { getHtml } = require('../../../services/get-html')

class EmailBounces extends React.Component {

  componentDidMount(){

  }

  render () {
    const openBrace = '{'
    const indent = (<span>&nbsp;&nbsp;</span>)

    return (
      <div>
        <h4>Report on email bounce statistics</h4>
        <p>Rate limited to 1 request(s) per 60 seconds</p>
        <h5>Request Example</h5>
        <pre>
          {openBrace}<br/>
          {indent}"api_key": "api-554407F347FB4689A35C07377E61B7D5"<br/>
          }
        </pre>
        <h5>Response Example</h5>
        <pre>
        {openBrace}<br/>
          {indent}"request_id": "2917fc07-d685-4fea-b49a-14087058461f",<br/>
          {indent}"data": {openBrace}<br/>
            {indent}{indent}"emails": 159,<br/>
            {indent}{indent}"rejects": 0,<br/>
            {indent}{indent}"softbounces": 0,<br/>
            {indent}{indent}"hardbounces": 0,<br/>
            {indent}{indent}"bounce_percent": "0.00"<br/>
          {indent}}<br/>
        }
        </pre>
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
      </div>
    )
  }
}

module.exports = EmailBounces
