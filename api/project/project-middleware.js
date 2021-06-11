const Project = require('./model.js')

const idValidator = async (req, res, next) => {
	const {id} = req.params
	try {
		const data = await Project.findById(id).first()

		if (!data) {
			next({
				status: 404,
				message: `Project with ID# ${id} Not Found!`,
			})
		} else {
			req.project = data
			next()
		}
	} catch (error) {
		next(error)
	}
}

const bodyValidator = (req, res, next) => {
	const {project_name, project_description, project_completed} = req.body

	if (!project_name) {
		next({status: 400, message: 'project_name is a required field'})
	} else {
		req.data = {
			project_name: project_name.trim(),
			project_description: project_description
				? project_description.trim()
				: null,
			project_completed: project_completed || false,
		}

		next()
	}
}

module.exports = {
	idValidator,
	bodyValidator,
}
