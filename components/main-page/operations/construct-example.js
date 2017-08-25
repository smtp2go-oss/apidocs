const React = require('react')
const renderHTML= require('react-render-html')
const constructExampleBox = require('./construct-example-box')


//the indenture of this is out because renderHTML takes the literal indenture
//from the page and applies it to the html, great module aside from that...
function constructSchemaBox(example){
  return (
    <div
    key={example.title}
    >
      <p>{example['primary-description']}</p>
      <p>{example['secondary-description']}</p>
      <h5>Request:</h5>
      <div className='schemaBox'>
        {constructExampleBox(example.request)}
      </div>
      <h5>Response:</h5>
      <div className='schemaBox'>
        {constructExampleBox(example.response)}
      </div>
    </div>
  )
}

module.exports = constructSchemaBox
