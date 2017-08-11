const initialState = require('../state')
module.exports = function contentsMenu (state = initialState.contentsMenu, action) {
  switch (action.type) {

    case 'TOGGLE_SECTION_DISPLAY':
      return state.map(item => {
        if (item.id === action.payload) {
          item.expandIcon = '-'
          item.backgroundColor = '#29e'
          item.expanded = true
        }else{
          item.expandIcon = '+'
          item.backgroundColor = null
          item.expanded = false
        }
        return item
      })
      //doesn't allow the dropdown to be closed without clicking on another
      //dropdown, can be changed easily.

    case 'CLICKED_README':
    return state.map(item => {
      item.expandIcon = '+'
      item.backgroundColor = null
      item.expanded = false
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
