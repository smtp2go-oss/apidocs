const React = require('react')

const SearchBar = require('./search-bar')
const Contents = require('./contents')

class SideBar extends React.Component {

  render () {
    return (
      <div id='sideBar'>
        <SearchBar {...this.props}/>
        <Contents {...this.props}/>
      </div>
    )
  }
}

module.exports = SideBar
