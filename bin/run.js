const app = require('../app')
const port = process.env.PORT || 8888

app.listen(port, function () {
  console.log(`listening on ${port}`)
})