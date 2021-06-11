const faker = require('faker')

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('resources').insert([
				{
					resource_name: 'Graco Spray Paint',
					resource_description: 'Graco #44 LG eletric sprayer',
				},
				{
					resource_name: 'Honda Pressure Washer',
					resource_description: '4000psi gasoline pressure water',
				},
				{
					resource_name: 'Carnuba Wax',
					resource_description: '100% Carnuba Oil hand wax',
				},
				{
					resource_name: 'Hoover Steam Cleaner',
					resource_description: 'Hover 125F portable cleaner',
				},
			])
		})
}
