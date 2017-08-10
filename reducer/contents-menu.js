const initialState = require('../state')
module.exports = function contentsMenu (state = initialState.contentsMenu, action) {
  switch (action.type) {

    case 'TOGGLE_SECTION_HIDDEN':
      return state.map(item => {
        if (item.id === action.payload) {
          item.expandIcon = item.expanded
            ? '+'
            : '-'
          item.backgroundColor = item.expanded
          ? '#666'
          : '#29e'
          item.expanded = !item.expanded
        }
        return item
      })

      break;

      case 'BUTTON_MOUSE_ENTER':
        if (state[action.payload].backgroundColor === null) {
          state[action.payload].backgroundColor = '#666'
        }
        return state

        break;

      case 'BUTTON_MOUSE_LEAVE':
        if (state[action.payload].backgroundColor === '#666') {
          state[action.payload].backgroundColor = null
        }
        return state

        break;

    default:
      return state
  }
}
