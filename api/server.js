'use strict'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const ProjectController = require('./project/router')
const ResourceController = require('./resource/router')
const TasksController = require('./task/router')

const server = express()
server.use(cors())
server.use(express.json())

if (process.env.NODE_ENV === 'development') {
	server.use(morgan('dev'))
}

server.use('/api/projects', ProjectController)
server.use('/api/resources', ResourceController)
server.use('/api/tasks', TasksController)

// Catch All error handling
server.use('*', (req, res) => {
	res.status(500).json({message: 'Opps the application failed !!!'})
})

module.exports = server
