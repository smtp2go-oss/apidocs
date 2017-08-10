const initialState = require('../state')
module.exports = function searchInput (state = initialState.searchInput, action) {
  switch (action.type) {

    case 'SEARCH_INPUT_CHANGE':
      return action.payload

      break;

    default:
      return state
  }
}
