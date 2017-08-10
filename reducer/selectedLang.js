const initialState = require('../state')
module.exports = function selectedLang (state = initialState.selectedLang, action) {
  switch (action.type) {

    case 'TOGGLE_DISPLAY_LANG':
      return action.payload

      break;

    default:
      return state
  }
}
