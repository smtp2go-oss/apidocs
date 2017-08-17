const initialState = require('../state')
module.exports = function langBoxShowing (state = initialState.langBoxShowing, action) {
  switch (action.type) {

    case 'TOGGLE_LANG_BOX':
      return !state

      break;

    case 'TOGGLE_DISPLAY_LANG':
      return false

      break;

    default:
      return state
  }
}
