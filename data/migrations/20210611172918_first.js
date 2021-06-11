exports.up = async function (knex) {
	await knex.schema.createTable('projects', (table) => {
		table.increments('project_id')
		table.string('project_name', 128).notNullable()
		table.string('project_description', 128)
		table.boolean('project_completed').defaultTo(0)
	}),
		await knex.schema.createTable('resources', (table) => {
			table.increments('resource_id')
			table.string('resource_name', 128).unique().notNullable()
			table.string('resource_description', 128)
		}),
		await knex.schema.createTable('tasks', (table) => {
			table.increments('task_id')
			table.string('task_description', 128).notNullable()
			table.string('task_notes', 255)
			table.boolean('task_completed').defaultTo(false)
			table
				.string('project_id', 128)
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
		})
}

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('tasks')
	await knex.schema.dropTableIfExists('resources')
	await knex.schema.dropTableIfExists('projects')
}
