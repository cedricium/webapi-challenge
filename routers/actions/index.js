const router = require('express').Router({ mergeParams: true })
const db = require('../../data/helpers/actionModel')
const { getProjectActions } = require('../../data/helpers/projectModel')

router.get('/', async (req, res) => {
  try {
    const projectId = req.params.id
    const actions = await getProjectActions(projectId)
    res.json(actions)
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the actions`
    })
  }
})

router.get('/id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the action`
    })
  }
})

router.post('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to add the action`
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to delete the action`
    })
  }
})

router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to update the action`
    })
  }
})


module.exports = router
