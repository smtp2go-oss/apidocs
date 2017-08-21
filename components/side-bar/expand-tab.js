const React = require('react')

class ExpandTab extends React.Component {

  render () {

    const dispatch = this.props.dispatch

    return (
      <div
        style={{height: '5vh', cursor: 'pointer', position: 'fixed'}}
        onClick={()=>dispatch({type:'TOGGLE_SIDE_BAR'})}
      >
      <img
        id='expandTab'
        src='https://rentllama.com/assets/icon-mobileMenu-957fc6f7c2d9a17985067e390315ff70da8d29feff83d766d1395ae2d29276a2.svg'
      >
      </img>
      </div>
    )
  }
}

module.exports = ExpandTab
