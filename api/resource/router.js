'use strict'

/*
|--------------------------------------------------------------------------
|  Project Controller
|--------------------------------------------------------------------------
*/

const express = require('express')
const router = express.Router()
const Resource = require('./model')
const {idValidator, bodyValidator} = require('./project-middleware')
/**
 * Route serving a list of all projects.
 * @url /api/projects
 * @method  GET
 * @memberof module:routers/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', async (req, res, next) => {
	try {
		const Resource = await Resource.all()
		// const newdata = project.map((el) => {
		// 	el.project_completed = Boolean(el.project_completed)
		// 	return el
		// })

		res.status(200).json(Resource)
	} catch (error) {
		next(error)
	}
})

/**
 * Route serving one project by the ID.
 * @url /api/projects/:ID'
 * @name GETBYID
 * @method  GET
 * @param {middleware}  IDvalidator - validate valid IDs.
 * @param {string} ID - project id
 */
router.get('/:id', idValidator, async (req, res, next) => {
	const {id} = req.params

	try {
		const data = req.project
		// data.project_completed = Boolean(data.project_completed)
		res.status(200).json(data)
	} catch (error) {
		next(error)
	}
})

/**
 * Route to create a new project.
 * @url /api/projects
 * @name CREATE
 * @method  POST
 * @param {function}  IDvalidator - Middleware to check for valid IDs.
 * @param {middleware} BodyValidator - clean and validate body content.
 *
 */
router.post('/', bodyValidator, async (req, res, next) => {
	console.log(req.data)
	try {
		const [id] = await Project.create(req.data)
		const newProject = await Project.findById(id).first()

		const response = {
			project_id: id,
			project_name: req.data.project_name,
			project_description: req.data.description,
			project_completed: Boolean(req.data.project_completed),
		}
		res.status(201).json(response)
	} catch (error) {
		next(error)
	}
})

/**
 * Route to Update a existing project by the ID.
 * @url /api/projects/:id
 * @method  PUT
 * @name UPDATE
 * @param {middleware} IdValidator - check for valid ID.
 * @param {middleware} BodyValidator - clean and validate body content.
 * @param {string} ID - project ID.
 * @param {object} BODY -  obj sent on the body request.
 *
 */
router.put('/:id', (req, res, next) => {})

/**
 * Route to delete a project.
 * @url /api/projects
 * @method  DELETE
 * @name DESTROY
 * @param {middleware} IdValidator - check for valid ID.
 *
 *
 */
router.delete('/:id', (req, res, next) => {})

// Error Handling Fucntion
//@Stack & err.message must be removed on Production

router.use((err, req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		res.status(err.status || 500).json({
			stack: err.stack,
			message: err.message,
		})
	} else {
		res.status(err.status || 500).json({
			message: 'Oppq Router Failed...',
		})
	}
})
module.exports = router
