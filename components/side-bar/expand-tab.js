const React = require('react')

class ExpandTab extends React.Component {

  render () {

    const dispatch = this.props.dispatch

    return (
      <div
        style={{height: '5vh', cursor: 'pointer'}}
        onClick={()=>dispatch({type:'TOGGLE_SIDE_BAR', payload: true})}
      >
      <img
        id='expandTab'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
      >
      </img>
      </div>
    )
  }
}

module.exports = ExpandTab
