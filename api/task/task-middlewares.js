const Task = require('./model.js')

const idValidator = async (req, res, next) => {
	console.log('validator working')
	const {id} = req.params
	try {
		const data = await Resource.findById(id).first()

		if (!data) {
			next({
				status: 404,
				message: `Resource with ID# ${id} Not Found!`,
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
	console.log('body validator')
	const {resource_name, resource_description} = req.body

	if (!task_description || ) {
		next({status: 400, message: 'Missing fields or Invalid Fields'})
	} else {
		next()
	}
}

module.exports = {
	idValidator,
	bodyValidator,
}
