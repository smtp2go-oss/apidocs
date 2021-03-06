const React = require('react')
const renderHTML= require('react-render-html')


//the indenture of this is out because renderHTML takes the literal indenture
//from the page and applies it to the html, great module aside from that...
function constructSchemaBox(schema){
  const openBrace = '{'
  const htmlObject = (
    <pre>
      {openBrace}<br/>
      {Object.keys(schema).map(key => {
        let htmlString = null
        if(schema[key].type){
          htmlString = `
  ${schema[key].name}: <span className='typeText'>${schema[key].type}</span>
  <span className='descriptionText'>${schema[key].description}</span>

}
          `
        }else{
          htmlString = (
`
  ${key}: {${constructHtmlObject(schema[key])}
  },
          `)
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
    return `${Object.keys(obj).map(key => {
      return (
`

    ${key}: <span className='typeText'>${obj[key].type}</span>
    <span className='descriptionText'>${obj[key].description}</span>`
)
    })}
    `
}

module.exports = constructSchemaBox
