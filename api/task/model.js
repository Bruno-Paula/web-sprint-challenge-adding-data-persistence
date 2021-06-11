const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Task Model
|--------------------------------------------------------------------------
*/

/**
 * Table of contents
 * *
 * @method  all        = returns all raw tasks from @tasks database
 * @method  findById   = returns one raw tasks from @tasks database
 * @method  create     = inserts validated data to @tasks database
 *
 * */

const all = () => {
	return db()
		.from('tasks as t')
		.leftJoin('projects as p', 't.project_id', 'p.project_id')
		.select(
			't.task_description',
			't.task_notes',
			't.task_completed',
			'p.project_name',
			'p.project_description'
		)
}

const findById = (task_id) => db('tasks').where('task_id', task_id)

const create = (data) => db('tasks').insert(data)

module.exports = {
	all,
	findById,
	create,
}
