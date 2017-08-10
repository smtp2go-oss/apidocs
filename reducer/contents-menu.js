const initialState = require('../state')
module.exports = function contentsMenu (state = initialState.contentsMenu, action) {
  switch (action.type) {

    case 'TOGGLE_SECTION_HIDDEN':
      return state.map(item => {
        if (item.id === action.payload) {
          item.expandIcon = item.expanded
            ? '+'
            : '-'
          item.expanded = !item.expanded
        }
        return item
      })

      break;

      case 'BUTTON_MOUSE_ENTER':
        state[action.payload].backgroundColor = '#666'
        return state

        break;

      case 'BUTTON_MOUSE_LEAVE':
        state[action.payload].backgroundColor = null
        return state

        break;

    default:
      return state
  }
}
