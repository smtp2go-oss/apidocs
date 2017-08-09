const { combineReducers } = require('redux')

const selectedLang = require('./selectedLang')
const route = require('./route')
const langBoxShowing = require('./lang-box-showing')

module.exports = combineReducers({
  selectedLang,
  route,
  langBoxShowing
})
