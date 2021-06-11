'use strict'
const express = require('express')
const router = express.Router()

/*
|--------------------------------------------------------------------------
|  Project Controller
|--------------------------------------------------------------------------

/**
 * Route serving a list of all projects.
 * @url /api/projects
 * @method  GET
 * @memberof module:routers/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', (req, res, next) => {})

/**
 * Route serving one project by the ID.
 * @url /api/projects/:ID'
 * @name GETBYID
 * @method  GET
 * @param {middleware}  IDvalidator - validate valid IDs.
 * @param {string} ID - project id
 */
router.get('/:id', (req, res, next) => {})

/**
 * Route to create a new project.
 * @url /api/projects
 * @name CREATE
 * @method  POST
 * @param {function}  IDvalidator - Middleware to check for valid IDs.
 * @param {middleware} BodyValidator - clean and validate body content.
 *
 */
router.post('/:', (req, res, next) => {})

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

module.exports = router
