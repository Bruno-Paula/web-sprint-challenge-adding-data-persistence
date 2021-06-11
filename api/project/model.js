const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Projects Model
|--------------------------------------------------------------------------

*/

/**
 * Table of contents
 * *
 * @method  all        = returns all raw projects from @Project database
 * @method  findById   = returns one raw project from @Project database
 * @method  create     = inserts validated data to @Project database
 *
 * */

const all = () => {
	return db('projects')
}

const findById = (project_id) => {
	return db('projects').where('project_id', project_id)
}

const create = (data) => {
	return db('projects').insert(data)
}

module.exports = {
	all,
	findById,
	create,
}
