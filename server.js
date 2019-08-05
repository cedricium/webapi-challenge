const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: `Mr. Watson, come here--I want to see you.`
  })
})

module.exports = app
