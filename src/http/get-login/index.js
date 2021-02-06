let arc = require("@architect/functions");
let data = require("@begin/data");

async function get(req) {
  let count = (req.session.count || 0) + 1;

  let body = `<h1>Page views this session: ${count}</h1>`;
  return {
    body,
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    session: { count },
    statusCode: 200,
  };
}

exports.handler = arc.http.async(get);
