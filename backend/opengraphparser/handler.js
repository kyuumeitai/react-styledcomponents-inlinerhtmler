const ogs = require('open-graph-scraper')

module.exports = (event, context) => {
  console.log('>>>event: ', event)
  console.log('>>>context: ', context)
  const options = { 'url': event.body }

  ogs(options).then(function (result) {
    // const response = {
    //   ...result,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Headers": "Content-Type,Authorization",
    //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    //   }
    // }
    context
      .status(200)
      .headers({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      })
      .succeed(result)
  })
  .catch(function (error) {
    context
      .status(501)
      .headers({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      })
      .succeed(error)
  })

}
