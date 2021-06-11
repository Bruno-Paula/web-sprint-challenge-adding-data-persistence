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
server.use(morgan('tiny'))
server.use('/api/projects', ProjectController)
server.use('/api/resources', ResourceController)
server.use('/api/tasks', TasksController)

module.exports = server
