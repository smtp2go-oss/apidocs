const React = require('react')

class Readme extends React.Component {

  render () {

    return (
      <div>
        <div className="docContainer">
          <h1>SMTP2GO API Documentation</h1>
          <h3>API Information</h3>
          <p>
            The SMTP2GO APIs base URL is <strong>https&#58;//api.smtp2go.com/v3/</strong><br />
            Any API URLs will always be relative to this URL.
          </p>
          <p>
            For example, an API call to <strong>/stats/email_summary</strong> will be reachable at <strong>https&#58;//api.smtp2go.com/v3/stats/email_summary</strong>
          </p>
          <h3>Technical Details</h3>
          <p>
            The API has the following characteristics:
          </p>
          <ul>
            <li>
              All API Calls must be made with an <strong>HTTP POST</strong> request.
            </li>
            <li>
              All <strong>input to</strong> and <strong>output from</strong> the API is made using JSON objects.
            </li>
            <li>
              All input payloads <strong>MUST</strong> contain the <strong>'api_key'</strong> field.
            </li>
            <li>
              All calls return a <strong>JSON</strong> payload consisting of a result string and any data that was returned.
            </li>
            <li>
              Any <strong>200 OK</strong> responses indicate a successful call. Error responses for each call are listed in the documentation.
              </li>
            </ul>
            <h3>Rate limiting</h3>
            <p>
              Unless otherwise specified, each endpoint has a limit of 360 requests per hour. Rate limiting headers are exhibited using the following HTTP response headers:
            </p>
            <ul>
              <li>
                <strong>X-RateLimit-Limit</strong> - The request limit for this endpoint.
              </li>
              <li>
                <strong>X-RateLimit-Remaining</strong> - Remaining requests before the limit is reached.
              </li>
              <li>
                <strong>X-RateLimit-Reset</strong> - Seconds before the remaining count is reset.
              </li>
            </ul>
            <h1>SMTP2GO API Documentation</h1>
            <h3>API Information</h3>
            <p>
              The SMTP2GO APIs base URL is <strong>https&#58;//api.smtp2go.com/v3/</strong><br />
              Any API URLs will always be relative to this URL.
            </p>
            <p>
              For example, an API call to <strong>/stats/email_summary</strong> will be reachable at <strong>https&#58;//api.smtp2go.com/v3/stats/email_summary</strong>
            </p>
            <h3>Technical Details</h3>
            <p>
              The API has the following characteristics:
            </p>
            <ul>
              <li>
                All API Calls must be made with an <strong>HTTP POST</strong> request.
              </li>
              <li>
                All <strong>input to</strong> and <strong>output from</strong> the API is made using JSON objects.
              </li>
              <li>
                All input payloads <strong>MUST</strong> contain the <strong>'api_key'</strong> field.
              </li>
              <li>
                All calls return a <strong>JSON</strong> payload consisting of a result string and any data that was returned.
              </li>
              <li>
                Any <strong>200 OK</strong> responses indicate a successful call. Error responses for each call are listed in the documentation.
                </li>
              </ul>
              <h3>Rate limiting</h3>
              <p>
                Unless otherwise specified, each endpoint has a limit of 360 requests per hour. Rate limiting headers are exhibited using the following HTTP response headers:
              </p>
              <ul>
                <li>
                  <strong>X-RateLimit-Limit</strong> - The request limit for this endpoint.
                </li>
                <li>
                  <strong>X-RateLimit-Remaining</strong> - Remaining requests before the limit is reached.
                </li>
                <li>
                  <strong>X-RateLimit-Reset</strong> - Seconds before the remaining count is reset.
                </li>
              </ul>
              <h1>SMTP2GO API Documentation</h1>
              <h3>API Information</h3>
              <p>
                The SMTP2GO APIs base URL is <strong>https&#58;//api.smtp2go.com/v3/</strong><br />
                Any API URLs will always be relative to this URL.
              </p>
              <p>
                For example, an API call to <strong>/stats/email_summary</strong> will be reachable at <strong>https&#58;//api.smtp2go.com/v3/stats/email_summary</strong>
              </p>
              <h3>Technical Details</h3>
              <p>
                The API has the following characteristics:
              </p>
              <ul>
                <li>
                  All API Calls must be made with an <strong>HTTP POST</strong> request.
                </li>
                <li>
                  All <strong>input to</strong> and <strong>output from</strong> the API is made using JSON objects.
                </li>
                <li>
                  All input payloads <strong>MUST</strong> contain the <strong>'api_key'</strong> field.
                </li>
                <li>
                  All calls return a <strong>JSON</strong> payload consisting of a result string and any data that was returned.
                </li>
                <li>
                  Any <strong>200 OK</strong> responses indicate a successful call. Error responses for each call are listed in the documentation.
                  </li>
                </ul>
                <h3>Rate limiting</h3>
                <p>
                  Unless otherwise specified, each endpoint has a limit of 360 requests per hour. Rate limiting headers are exhibited using the following HTTP response headers:
                </p>
                <ul>
                  <li>
                    <strong>X-RateLimit-Limit</strong> - The request limit for this endpoint.
                  </li>
                  <li>
                    <strong>X-RateLimit-Remaining</strong> - Remaining requests before the limit is reached.
                  </li>
                  <li>
                    <strong>X-RateLimit-Reset</strong> - Seconds before the remaining count is reset.
                  </li>
                </ul>
          </div>
      </div>
    )
  }
}

module.exports = Readme
