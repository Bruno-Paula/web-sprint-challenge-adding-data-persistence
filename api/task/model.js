const db = require('../../data/dbConfig')
/*
|--------------------------------------------------------------------------
|  Task Model
|--------------------------------------------------------------------------

*/
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

const findById = (task_id) => {
	return db('tasks').where('task_id', task_id)
}

const create = (data) => {
	console.log('data', data)
	return db('tasks').insert(data)
}

const addStep = (project_id, step) => {}

module.exports = {
	all,
	findById,
	create,
	addStep,
}
