const React = require('react')

class LangBox extends React.Component {

  render () {
    const state = this.props.state || {selectedLang: null}
    const { selectedLang, langBoxShowing } = state
    const display = langBoxShowing
      ? (
        <div>
          <div id='selectedLang'>{selectedLang}</div>
          <div className='langChoice'>Javascript</div>
          <div className='langChoice'>Python</div>
          <div className='langChoice'>C#</div>
        </div>
      )
      : (
        <div id='selectedLang'>{selectedLang}</div>
      )
    return (
      <div
        id='langSelect'
        onMouseEnter={()=>this.props.dispatch({type: 'TOGGLE_LANG_BOX'})}
        onMouseLeave={()=>this.props.dispatch({type: 'TOGGLE_LANG_BOX'})}
      >{display}
      </div>
    )
  }
}

module.exports = LangBox
