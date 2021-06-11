'use strict'

/*
|--------------------------------------------------------------------------
|  Resources Controller
|--------------------------------------------------------------------------
*/

const express = require('express')
const router = express.Router()
const Resource = require('./model')
const {
	idValidator,
	bodyValidator,
	uniqueRecord,
} = require('./resource.middleware')

/**
 * Route serving a list of all /resources.
 * @url /api/resources
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
 * Route serving one resource by the ID.
 * @url /api/resources/:id'
 * @name GETBYID
 * @method  GET
 * @param {middleware}  IDvalidator - validate valid IDs.
 * @param {string} ID - resources id
 */
router.get('/:id', idValidator, async (req, res, next) => {
	try {
		const data = req.resources
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
 * @param {function}   IDvalidator     - Middleware to check for valid IDs.
 * @param {middleware} BodyValidator   - clean and validate body content.
 * @param {middleware} uniqueRecord    - prevents two records from having identical values .
 *
 */
router.post('/', bodyValidator, async (req, res, next) => {
	try {
		const [id] = await Resource.create(req.body)
		res.status(201).json({resource_id: id, ...req.body})
	} catch (error) {
		next({status: 400, message: 'Resource name already exist...'})
	}
})

// // Error Handling Fucntion
// // Stack & err.message must be removed on Production

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
