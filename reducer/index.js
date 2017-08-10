const { combineReducers } = require('redux')

const selectedLang = require('./selectedLang')
const route = require('./route')
const langBoxShowing = require('./lang-box-showing')
const langOptions = require('./lang-options')
const contentsMenu = require('./contents-menu')
const searchInput = require('./search-input')
const page = require('./page')

module.exports = combineReducers({
  selectedLang,
  route,
  langBoxShowing,
  langOptions,
  contentsMenu,
  searchInput,
  page
})
