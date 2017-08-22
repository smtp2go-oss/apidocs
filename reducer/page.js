const initialState = require('../state')
module.exports = function page (state = initialState.page, action) {
  switch (action.type) {

    case 'TOGGLE_PAGE_DISPLAY':
      return action.payload

      break;

    case 'CLICKED_README':
      return '/readme'

      break;

    default:
      return state
  }
}
