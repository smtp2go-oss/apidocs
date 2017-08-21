const initialState = require('../state')
module.exports = function htmlDisplay (state = initialState.htmlDisplay, action) {
  switch (action.type) {

    case 'GET_HTML':
      return action.payload

      break;

    default:
      return state
  }
}
