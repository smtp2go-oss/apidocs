const React = require('react')

const SearchBar = require('./search-bar')
const Contents = require('./contents')

class SideBar extends React.Component {

  render () {
    return (
      <div id='sideBar'>
        <SearchBar />
        <Contents {...this.props}/>
      </div>
    )
  }
}

module.exports = SideBar
