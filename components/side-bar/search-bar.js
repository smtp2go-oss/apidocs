const React = require('react')

class SearchBar extends React.Component {


  render () {

    const dispatch = this.props.dispatch

    const state = this.props.state || {searchInput: ''}
    const { searchInput } = state

    return (
      <form>
        <input
          id='searchBar'
          placeholder='Search'
          ref='searchInput'
          onChange={()=>dispatch({
            type: 'SEARCH_INPUT_CHANGE',
            payload: this.refs.searchInput.value
          })}
          value={searchInput}
        />
      </form>
    )
  }
}

module.exports = SearchBar
