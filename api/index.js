const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
const db = require('./db')


app.use(cors())

app.get('/api/:id', async (req, res) => {
  const { id } = req.params
  console.log("ID", id);
  const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]).catch(error => {
    console.log("QUERY ERROR", error);
  });
  console.log("XXX", rows)
  res.json(rows)
})

app.post('/api/:name', async (req, res) => {
  const { name } = req.params
  console.log("name", name);
  const {rowCount} = await db.query(`INSERT INTO "users" ("name") VALUES ($1)`, [name]).catch(error => {
    console.log("QUERY ERROR", error);
  });
  console.log("XXX", rowCount)
  res.json({ "result": `Inserted ${rowCount} rows` })
})

app.get('/data', (req, res) => {
  res.json({
    "foo": "bar"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})