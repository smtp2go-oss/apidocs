const React = require('react')

const initialState = require('../../state')
const SearchBar = require('./search-bar')
const Contents = require('./contents')
const ExpandTab = require('./expand-tab')

class SideBarMobile extends React.Component {

  render () {

    const state = this.props.state || initialState
    const { sideBarMobile } = state

    const sideBarShowing = (
      <div
        id='sideBarMobile'
      >
      <SearchBar {...this.props}/>
      <Contents {...this.props}/>
      </div>
    )
    const display = sideBarMobile
      ? sideBarShowing
      : null

    return display
  }
}

module.exports = SideBarMobile
