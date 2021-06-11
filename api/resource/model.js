const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Resources Model
|--------------------------------------------------------------------------

*/

/**
 * Table of contents
 * *
 * @method  all        = returns all raw resources from @Resources database
 * @method  findById   = returns one raw resources from @Resources database
 * @method  create     = inserts validated data to @Resources database
 *
 * */

const all = () => {
	return db('resources')
}

const findById = (Resources_name) => {
	return db('resources').where('project_name', Resources_name)
}

const create = (data) => {
	return db('resources').insert(data)
}

module.exports = {
	all,
	findById,
	create,
}
