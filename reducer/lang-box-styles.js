const initialState = require('../state')
module.exports = function langBoxStyles (state = initialState.langBoxStyles, action) {
  switch (action.type) {

    case 'LANGBOX_MOUSE_ENTER':
      state.selected = action.payload
      state.backgroundColor = '#666'
      return state

      break;

    case 'LANGBOX_MOUSE_LEAVE':
      state.selected = null
      state.backgroundColor = null
      return state

      break;

    default:
      return state
  }
}
