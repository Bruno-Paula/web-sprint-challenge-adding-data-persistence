const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Project Model
|--------------------------------------------------------------------------

*/
const all = () => {
	return db('projects')
}

const findById = (project_id) => {
	return db('projects').where('project_id', project_id)
}

const create = (data) => {
	console.log('data', data)
	return db('projects').insert(data)
}

const addStep = (project_id, step) => {}

module.exports = {
	all,
	findById,
	create,
	addStep,
}
