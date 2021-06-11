'use strict'

/*
|--------------------------------------------------------------------------
|  Resources Controller
|--------------------------------------------------------------------------
*/

const express = require('express')
const router = express.Router()
const Resource = require('./model')
const {idValidator, bodyValidator} = require('./resource.middleware')
/**
 * Route serving a list of all /resources.
 * @url /api//resources
 * @method  GET
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', async (req, res, next) => {
	try {
		const data = await Resource.all()
		res.status(200).json(data)
	} catch (error) {
		next(error)
	}
})

/**
 * Route serving one /resource by the ID.
 * @url /api//resources/:ID'
 * @name GETBYID
 * @method  GET
 * @param {middleware}  IDvalidator - validate valid IDs.
 * @param {string} ID - resources id
 */
router.get('/:id', idValidator, async (req, res, next) => {
	const {id} = req.params

	try {
		const data = req.resources
		// data.project_completed = Boolean(data.project_completed)
		res.status(200).json(data)
	} catch (error) {
		next(error)
	}
})

/**
 * Route to create a new resources.
 * @url /api/resources
 * @name CREATE
 * @method  POST
 * @param {function}  IDvalidator - Middleware to check for valid IDs.
 * @param {middleware} BodyValidator - clean and validate body content.
 *
 */
router.post('/', bodyValidator, async (req, res, next) => {
	console.log(req.data)
	try {
		const [id] = await Resource.create(req.body)
		// const newProject = await Project.findById(id).first()

		res.status(201).json({resource_id: id, ...req.body})
	} catch (error) {
		next(error)
	}
})

// /**
//  * Route to Update a existing resources by the ID.
//  * @url /api/projects/:id
//  * @method  PUT
//  * @name UPDATE
//  * @param {middleware} IdValidator - check for valid ID.
//  * @param {middleware} BodyValidator - clean and validate body content.
//  * @param {string} ID - project ID.
//  * @param {object} BODY -  obj sent on the body request.
//  *
//  */
// router.put('/:id', (req, res, next) => {})

// /**
//  * Route to delete a resources.
//  * @url /api/resources
//  * @method  DELETE
//  * @name DESTROY
//  * @param {middleware} IdValidator - check for valid ID.
//  *
//  *
//  */
// router.delete('/:id', (req, res, next) => {})

// // Error Handling Fucntion
// //@Stack & err.message must be removed on Production

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
