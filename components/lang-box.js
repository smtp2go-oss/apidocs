const React = require('react')

class LangBox extends React.Component {

  render () {
    const state = this.props.state || {selectedLang: null}
    const { selectedLang, langBoxShowing } = state
    const display = langBoxShowing
      ? (
        <div>
          <div class='langChoice'>{selectedLang}</div>
          <div class='langChoice'>Javascript</div>
          <div class='langChoice'>Python</div>
          <div class='langChoice'>C#</div>
        </div>
      )
      : (
        <div class='langChoice'>{selectedLang}</div>
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
