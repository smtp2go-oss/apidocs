const React = require('react')
const renderHTML= require('react-render-html')

function constructExampleBox (example) {
  const htmlString = (
`{${Object.keys(example).map(key => {
    const display = typeof(example[key]) !== 'object'
      ? example[key]
      : (
`{${Object.keys(example[key]).map(subKey => {
        return (
  `

    ${subKey}: ${example[key][subKey]}`
        )
      })}

  }`
    )
    return (
`

  ${key}: ${display}`
    )
  })}

}
`
  )
  return (
    <pre>
      {renderHTML(htmlString)}
    </pre>
  )
}

module.exports = constructExampleBox
