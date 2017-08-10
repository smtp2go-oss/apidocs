const React = require('react')

class Contents extends React.Component {

  render () {

    const dispatch = this.props.dispatch
    const state = this.props.state || {contentsMenu: [{header: '', subheaders: []}], searchInput: ''}
    const { contentsMenu, searchInput } = state

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
      return <div
        className='contentsSubheader'
      >
        {subheader}
      </div>
    }

    return (
      <div>
        <div
          className='contentsHeader'
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
