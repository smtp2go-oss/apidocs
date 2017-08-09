const initialState = require('../state')
module.exports = function selectedLang (state = 'Javascript', action) {
  switch (action.type) {

    case 'TOGGLE_DISPLAY_LANG':
      return action.payload

      break;

    default:
      return state
  }
}
