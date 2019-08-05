const router = require('express').Router()
const db = require('../../data/helpers/projectModel')
const { validateProjectId, validateProjectBody } = require('../../middleware')

router.get('/', async (req, res) => {
  try {
    const projects = await db.get()
    res.json(projects)
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the projects`
    })
  }
})

router.get('/:id', validateProjectId, async (req, res) => {
  try {
    const { project } = req
    res.json({ ...project })
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the projects`
    })
  }
})

router.post('/', validateProjectBody, async (req, res) => {
  try {
    const { project } = req
    const newProject = await db.insert(project)
    res.status(201).json({ ...newProject })
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the projects`
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the projects`
    })
  }
})

router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the projects`
    })
  }
})

module.exports = router
