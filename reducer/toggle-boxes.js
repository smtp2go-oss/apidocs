const initialState = require('../state')
module.exports = function toggleBoxes (state = initialState.toggleBoxes, action) {
  switch (action.type) {

    case 'SHOW_SECTION':
      const { page, section, subsection, value } = action.payload
      console.log(page, section, subsection, value);
      state[page][section][subsection] = value
      return state

    default:
      return state
  }
}
