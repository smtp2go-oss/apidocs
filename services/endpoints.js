const request = require('superagent')
const url = require('./request-url')

function endpointsIndex (cb) {
  request
    .get(url.endpointsIndex)
    .end((err, res) => {
      if (err || !res.ok) {
        cb(err, null)
      } else {
        cb(null, res)
      }
    })
}

function endpoint (section, cb) {
  request
    .get(`${url.endpoint}?ep=${section}`)
    .end((err, res) => {
      if (err || !res.ok) {
        cb(err, null)
      } else {
        cb(null, res)
      }
    })
}

module.exports = {
  endpointsIndex,
  endpoint
}
