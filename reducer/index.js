const { combineReducers } = require('redux')

const selectedLang = require('./selectedLang')
const route = require('./route')
const langBoxShowing = require('./lang-box-showing')
const langOptions = require('./lang-options')
const contentsMenu = require('./contents-menu')
const searchInput = require('./search-input')
const page = require('./page')
const readmeButton = require('./readme-button')
const subheaderStyles = require('./subheader-styles')
const langBoxStyles = require('./lang-box-styles')
const sideBarMobile = require('./side-bar-mobile')
const htmlDisplay = require('./html-display')
const toggleBoxes = require('./toggle-boxes')
const pageContent = require('./page-content')

module.exports = combineReducers({
  selectedLang,
  route,
  langBoxShowing,
  langOptions,
  contentsMenu,
  searchInput,
  page,
  readmeButton,
  subheaderStyles,
  langBoxStyles,
  sideBarMobile,
  htmlDisplay,
  toggleBoxes,
  pageContent
})
