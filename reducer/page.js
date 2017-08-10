const initialState = require('../state')
module.exports = function page (state = initialState.page, action) {
  switch (action.type) {

    case 'NAVIGATE':
      return action.payload

      break;

    default:
      return state
  }
}
