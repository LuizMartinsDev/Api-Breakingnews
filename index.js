const express = require('express')
const app = express()
const port = 3000

app.get('/teste', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)