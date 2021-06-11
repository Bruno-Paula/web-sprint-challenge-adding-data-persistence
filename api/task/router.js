'use strict'

/*
|--------------------------------------------------------------------------
|  Tasks Controller
|--------------------------------------------------------------------------
*/

const express = require('express')
const router = express.Router()
const Task = require('./model')
const {idValidator, bodyValidator} = require('./task-middlewares')
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
		const data = await Task.all()
		const newData = data.map((el) => {
			el.task_completed = Boolean(el.task_completed)
			return el
		})
		res.status(200).json(newData)
	} catch (error) {
		next(error)
	}
})

// /**
//  * Route serving one task by the ID.
//  * @url /api/tasks/:ID'
//  * @name GETBYID
//  * @method  GET
//  * @param {middleware}  IDvalidator - validate valid IDs.
//  * @param {string} ID - project id
//  */
// router.get('/:id', async (req, res, next) => {
// 	const {id} = req.params

// 	try {
// 		const data = req.project
// 		data.project_completed = Boolean(data.project_completed)
// 		res.status(200).json(data)
// 	} catch (error) {
// 		next(error)
// 	}
// })

/**
 * Route to create a new project.
 * @url /api/projects
 * @name CREATE
 * @method  POST
 * @param {function}  IDvalidator - Middleware to check for valid IDs.
 * @param {middleware} BodyValidator - clean and validate body content.
 *
 */
router.post('/', async (req, res, next) => {
	console.log(req.data)
	try {
		const [id] = await Task.create(req.body)
		const newtask = await Task.findById(id).first()
		newtask.task_completed = Boolean(newtask.task_completed)
		res.status(201).json(newtask)
	} catch (error) {
		next(error)
	}
}) /
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
