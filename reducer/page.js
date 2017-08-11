const initialState = require('../state')
module.exports = function page (state = initialState.page, action) {
  switch (action.type) {

    case 'TOGGLE_SECTION_DISPLAY':
      return initialState.contentsMenu[action.payload].page

      break;

    default:
      return state
  }
}
