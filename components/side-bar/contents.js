const React = require('react')

class Contents extends React.Component {

  render () {

    const dispatch = this.props.dispatch
    const state = this.props.state || {contentsMenu: []}
    const { contentsMenu } = state

    const contentsHeaders = contentsMenu.map(formatDisplay)

    function formatDisplay (section) {
      let display = [(
        <div
          key={section.id}
          className='sectionHeader'
          onClick={()=>dispatch({type: 'TOGGLE_SECTION_HIDDEN', payload: section.id})}
        >
          {`+ ${section.header}`}
        </div>
      )]
      if (section.expanded) {
        display.push(section.subheaders.map(formatSubheader))
      }
      return display
    }

    function formatSubheader (subheader) {
      return <div>{subheader}</div>
    }

    return (
      <div>
        <div
          className='contents'
          id='contentsReadme'
          onClick={()=>console.log('clicked README')}
        >README
        </div>
        {contentsHeaders}
      </div>

    )
  }
}

module.exports = Contents
