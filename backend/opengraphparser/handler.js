const ogs = require('open-graph-scraper')

module.exports = (event, context) => {
  console.log(event)
  console.log('queryobj', event.body)

  const options = { 'url': event.body }

  ogs(options).then(function (result) {
    context
      .status(200)
      .succeed(result)
  })
  .catch(function (error) {
    context
      .status(501)
      .succeed(error)
  })

}
