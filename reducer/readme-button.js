const initialState = require('../state')
module.exports = function readmeButton (state = initialState.readmeButton, action) {
  switch (action.type) {

    case 'CLICKED_README':
      state.backgroundColor = '#29e'
      return state

      break;

    case 'README_MOUSE_ENTER':
      if (state.backgroundColor === null) {
        state.backgroundColor = '#666'
      }
      return state

      break;

    case 'README_MOUSE_LEAVE':
      if (state.backgroundColor === '#666') {
        state.backgroundColor = null
      }
      return state

      break;

    case 'TOGGLE_SECTION_HIDDEN':
      state.backgroundColor = null
      return state

    default:
      return state
  }
}
