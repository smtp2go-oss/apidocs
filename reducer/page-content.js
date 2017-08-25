const initialState = require('../state')
module.exports = function pageContent (state = initialState.pageContent, action) {
  switch (action.type) {

    case 'SET_PAGE_CONTENT':
      state[action.payload.page] = action.payload.content
      return state

    default:
      return state
  }
}
