const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.json({
    "foo": "bar"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})