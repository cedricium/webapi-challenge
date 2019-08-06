const router = require('express').Router()
const actionsRouter = require('../actions')
const db = require('../../data/helpers/projectModel')
const { validateProjectId, validateProjectBody } = require('../../middleware')

router.use('/:id/actions', validateProjectId, actionsRouter)

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
      error: `An error occurred while attempting to add the new project`
    })
  }
})

router.delete('/:id', validateProjectId, async (req, res) => {
  try {
    const { id } = req.params
    await db.remove(id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to delete the project`
    })
  }
})

router.put('/:id', validateProjectId, validateProjectBody, async (req, res) => {
  try {
    const { project } = req
    const { id } = req.params
    const updatedProject = await db.update(id, project)
    res.status(200).json({ ...updatedProject })
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to update the project`
    })
  }
})

module.exports = router
