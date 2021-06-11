const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Project Model
|--------------------------------------------------------------------------

*/
const all = () => {
	return db('resources')
}

const findById = (project_name) => {
	return db('resources').where('project_name', project_name)
}

const create = (data) => {
	return db('resources').insert(data)
}

module.exports = {
	all,
	findById,
	create,
}
