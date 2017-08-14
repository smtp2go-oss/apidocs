const React = require('react')

const initialState = require('../../state')

class LangBox extends React.Component {


  render () {

    const dispatch = this.props.dispatch
    const state = this.props.state || initialState
    const { selectedLang, langBoxShowing, langOptions, langBoxStyles } = state

    const display = langBoxShowing
    ? displayOptions(langOptions)
    : (
      <div id='selectedLang'>{selectedLang}</div>
    )

    function displayOption(language){
      const backgroundColor = (langBoxStyles.selected === language)
        ? langBoxStyles.backgroundColor
        : null
      return <div
        className='langChoice'
        style={{backgroundColor: backgroundColor}}
        onClick={()=>handleLangSelect(language)}
        onMouseEnter={()=> dispatch({
          type: 'LANGBOX_MOUSE_ENTER',
          payload: language
        })}
        onMouseLeave={()=> dispatch({
          type: 'LANGBOX_MOUSE_LEAVE',
          payload: language
        })}
        key={language}
      >{language}</div>
    }

    function displayOptions(languages){
      let displayLangs = languages.map(displayOption)
      displayLangs.unshift(<div key='selectedLang' id='selectedLang'>{selectedLang}</div>)
      return displayLangs
    }

    function handleLangSelect (language) {
      dispatch({type: 'TOGGLE_DISPLAY_LANG', payload: language})
    }

    return (
      <div
        id='langSelect'
        onMouseEnter={()=>dispatch({type: 'TOGGLE_LANG_BOX'})}
        onMouseLeave={()=>dispatch({type: 'TOGGLE_LANG_BOX'})}
      >{display}
      </div>
    )
  }
}

module.exports = LangBox
