const initialState = require('../state')
module.exports = function langBoxShowing (state = initialState.langBoxShowing, action) {
  switch (action.type) {

    case 'TOGGLE_LANG_BOX':
      return !state

      break;

    default:
      return state
  }
}
