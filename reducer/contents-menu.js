const initialState = require('../state')
module.exports = function contentsMenu (state = initialState.contentsMenu, action) {
  switch (action.type) {

    case 'TOGGLE_SECTION_HIDDEN':
      return state.map(item => {
        if (item.id === action.payload) {
          item.expanded = !item.expanded
        }
        return item
      })

      break;

    default:
      return state
  }
}
