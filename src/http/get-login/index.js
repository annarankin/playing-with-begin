let arc = require('@architect/functions')
let data = require('@begin/data')

async function get (req) {
  req.session.pageView = req.session.pageView || 0
  req.session.pageView += 1

  let body = `<h1>Page views this session: ${req.session.pageView}</h1>`
  return {
    body,
    statusCode: 200,
  }
}

exports.handler = arc.http.async(get)