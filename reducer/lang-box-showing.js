const initialState = require('../state')
module.exports = function langBoxShowing (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_LANG_BOX':
      return !state

      break;

    default:
      return state
  }
}
