const faker = require('faker')

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					project_name: 'Paint Exterior',
					project_description: 'Prime and paint the exterior walls',
					project_completed: 1,
				},
				{
					project_name: 'Wash Driveway',
					project_description:
						'Powerwash sidewalk and the driveway at 4000psi',
					project_completed: 0,
				},
				{
					project_name: 'Wax Car',
					project_description: 'wax vehicle exterior',
					project_completed: 0,
				},
				{
					project_name: 'Carpet Cleaning',
					project_description: 'Hire a steam cleaning company',
					project_completed: 1,
				},
			])
		})
}
