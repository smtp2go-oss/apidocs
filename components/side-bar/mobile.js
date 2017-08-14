const React = require('react')

const initialState = require('../../state')
const SearchBar = require('./search-bar')
const Contents = require('./contents')
const HideTab = require('./hide-tab')
const ExpandTab = require('./expand-tab')

class SideBarMobile extends React.Component {

  render () {

    const state = this.props.state || initialState
    const { sideBarMobile } = state

    const sideBarHidden = (
      <div>
        <ExpandTab {...this.props}/>
      </div>

    )
    const sideBarShowing = (
      <div
        id='sideBarMobile'
      >
      <HideTab {...this.props}/>
      <SearchBar {...this.props}/>
      <Contents {...this.props}/>
      </div>
    )
    const display = sideBarMobile
      ? sideBarShowing
      : sideBarHidden

    return display
  }
}

module.exports = SideBarMobile
