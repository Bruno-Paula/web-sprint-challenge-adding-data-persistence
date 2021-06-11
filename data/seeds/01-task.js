const faker = require('faker')

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					task_notes: 'wall sanding',
					task_description: 'Wall Sanding',
					task_completed: 0,
					project_id: 1,
				},
				{
					task_notes: 'Spray bleach',
					task_description:
						'mix bleach / water and pre-spray the house',
					project_id: 2,
					task_completed: 0,
				},
				{
					task_notes: 'wash and wax car',
					task_description:
						'Clean the experior, Rims and Engine first',
					task_completed: 1,
					project_id: 3,
				},
				{
					task_notes: 'Pre-Spray and Vac',
					task_description: 'Pre spot any wine stains and food spots',
					task_completed: 0,
					project_id: 4,
				},
			])
		})
}
