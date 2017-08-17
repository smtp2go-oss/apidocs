const request = require('superagent')
const url = require('./request-url')

function getHtml (section, cb) {
  request
    .get(url[section])
    .end((err, res) => {
      if (err || !res.ok) {
        cb(err, null)
      } else {
        cb(null, res)
      }
    })
}

module.exports = {
  getHtml
}
