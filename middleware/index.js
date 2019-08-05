const db = require('../data/helpers/projectModel')

const validateProjectId = async (req, res, next) => {
  const { id } = req.params
  try {
    const project = await db.get(id)
    if (project) {
      req['project'] = project
      next()
    } else {
      res.status(404).json({
        error: `No project with id ${id} exists`
      })
    }
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to validate the project ID`
    })
  }
}

module.exports = {
  validateProjectId
}
