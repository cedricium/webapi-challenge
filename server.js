const express = require('express')
const app = express()

const projectsRouter = require('./routers/projects')

app.use(express.json())
app.use('/api/projects', projectsRouter)

app.get('/', (req, res) => {
  res.json({
    message: `Mr. Watson, come here--I want to see you.`
  })
})

module.exports = app
