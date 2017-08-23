const React = require('react')
const renderHTML= require('react-render-html')

function constructHtmlBox (responses, page, section, subsection, display, styles, dispatch) {
  return (
    <div>
    <div
    className='toggleBox'
    style={styles[subsection].schema}
    onClick={() => dispatch({
      type: 'SHOW_SECTION',
      payload: {
        page: page,
        section: section,
        subsection: subsection,
        value: 'schema'
      }
    })}
    >
    Schema
    </div>
    <div
    className='toggleBox'
    style={styles[subsection].example}
    onClick={() => dispatch({
      type: 'SHOW_SECTION',
      payload: {
        page: page,
        section: section,
        subsection: subsection,
        value: 'example'
      }
    })}
    >
    Example
    </div>
    <div
    className='schemaBox'
    >
    {display}
    </div>
    </div>
  )
}

module.exports = constructHtmlBox
