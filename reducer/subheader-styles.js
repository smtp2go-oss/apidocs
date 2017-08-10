const initialState = require('../state')
module.exports = function subheaderStyles (state = initialState.subheaderStyles, action) {
  switch (action.type) {

    case 'SUBHEADER_MOUSE_ENTER':
      state.selected = action.payload
      state.backgroundColor = '#666'
      return state

      break;

    case 'SUBHEADER_MOUSE_LEAVE':
      state.selected = null
      state.backgroundColor = null
      return state

      break;

    default:
      return state
  }
}
