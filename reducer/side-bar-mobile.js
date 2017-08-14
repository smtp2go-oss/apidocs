const initialState = require('../state')
module.exports = function sideBarMobile (state = initialState.sideBarMobile, action) {
  switch (action.type) {

    case 'TOGGLE_SIDE_BAR':
      return action.payload

      break;

    default:
      return state
  }
}
