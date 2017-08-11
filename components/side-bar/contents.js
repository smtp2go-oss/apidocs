const React = require('react')

const initialState = require('../../state')

class Contents extends React.Component {

  render () {

    const dispatch = this.props.dispatch
    const state = this.props.state || initialState
    const { contentsMenu, searchInput, readmeButton, subheaderStyles } = state

    const shownSections = contentsMenu.filter(searchSection).map(searchSection)
    const contentsHeaders = shownSections.map(formatDisplay)

    function searchSection(section){
      const subheaderMatches = section.subheaders.filter(filterBySearch)
      if (filterBySearch(section.header)) {
        return section
      }
      else if (section.subheaders.filter(filterBySearch).length) {
        const filteredSubheaders = section.subheaders.filter(filterBySearch)
        return Object.assign({}, section, {
          subheaders: filteredSubheaders
        })
      }
      else{
        return false
      }
    }

    function filterBySearch(string){
      return string.toUpperCase().indexOf(searchInput.toUpperCase()) !== -1
    }

    function formatDisplay (section) {
      let display = [(
        <div
          key={section.id}
          className='contentsHeader'
          style= {{'backgroundColor': section.backgroundColor}}
          onMouseEnter={()=> dispatch({
            type: 'BUTTON_MOUSE_ENTER',
            payload: section.id
          })}
          onMouseLeave={()=> dispatch({
            type: 'BUTTON_MOUSE_LEAVE',
            payload: section.id
          })}
          onClick={()=>dispatch({
            type: 'TOGGLE_SECTION_DISPLAY',
            payload: section.id
          })}
        >
          {`${section.expandIcon} ${section.header}`}
        </div>
      )]
      if (section.expanded) {
        display.push(section.subheaders.map(formatSubheader))
      }
      return display
    }

    function formatSubheader (subheader) {
      const backgroundColor = (subheaderStyles.selected === subheader)
        ? subheaderStyles.backgroundColor
        : null
      return <div
        className='contentsSubheader'
        onClick={()=> dispatch({type: 'NAVIGATE', payload: subheader})}
        onMouseEnter={()=> dispatch({
          type: 'SUBHEADER_MOUSE_ENTER',
          payload: subheader
        })}
        onMouseLeave={()=> dispatch({
          type: 'SUBHEADER_MOUSE_LEAVE',
          payload: subheader
        })}
        style={{backgroundColor: backgroundColor}}
      >
        {subheader}
      </div>
    }

    return (
      <div>
        <div
          className='contentsHeader'
          id='contentsReadme'
          style= {{'backgroundColor': readmeButton.backgroundColor}}
          onClick={()=> dispatch({type: 'CLICKED_README'})}
          onMouseEnter={()=> dispatch({type: 'README_MOUSE_ENTER'})}
          onMouseLeave={()=> dispatch({type: 'README_MOUSE_LEAVE'})}
        >README
        </div>
        {contentsHeaders}
      </div>

    )
  }
}

module.exports = Contents
