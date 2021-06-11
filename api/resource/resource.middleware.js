/*
|--------------------------------------------------------------------------
|  Resources Middleware
|--------------------------------------------------------------------------
*/

/**
 * Table of contents
 * *
 * @function idValidator     = validating if ID already exist on the database
 * @function  bodyValidator  = sanitizes the data before inserted to the database
 * @function  uniqueRecord   = return only distinct row values to avoid duplicates
 *
 * */
const Resource = require('./model.js')
const db = require('../../data/dbConfig')

const idValidator = async (req, res, next) => {
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
	const {resource_name} = req.body

	if (!resource_name) {
		next({status: 400, message: 'Missing fields or Invalid Fields'})
	} else {
		next()
	}
}

const uniqueRecord = async (req, res, next) => {
	const {resource_name} = req.body

	const unique = await db('resources')
		.where('resource_name', resource_name)
		.first()

	if (unique.resource_name) {
		next({stauts: 400, message: 'Resource name already exist...'})
	} else {
		next()
	}
}

module.exports = {
	idValidator,
	bodyValidator,
	uniqueRecord,
}
