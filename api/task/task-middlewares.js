/*
|--------------------------------------------------------------------------
|  Tasks Middleware
|--------------------------------------------------------------------------
*/

/**
 * Table of contents
 * *
 * @function idValidator     = validating if ID already exist on the database
 * @function  bodyValidator  = sanitizes the data before inserted to the database
 *
 * */

const Task = require('./model.js')

const idValidator = async (req, res, next) => {
	const {id} = req.params
	try {
		const data = await Task.findById(id).first()

		if (!data) {
			next({
				status: 404,
				message: `Task with ID# ${id} Not Found!`,
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
	const {task_description} = req.body

	if (!task_description) {
		next({status: 400, message: 'task_description is a required Fields'})
	} else {
		next()
	}
}

module.exports = {
	idValidator,
	bodyValidator,
}
