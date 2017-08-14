const React = require('react')

class HideTab extends React.Component {

  render () {

    const dispatch = this.props.dispatch

    return (
      <div
        style={{height: '5vh', cursor: 'pointer'}}
        onClick={()=>dispatch({type:'TOGGLE_SIDE_BAR', payload: false})}
      >
        <img
          id='hideTab'
          src='http://www.hwns.com.au/annual-review/2015/images/Menu-Icon-Close.png'
        >
        </img>
      </div>
    )
  }
}

module.exports = HideTab
