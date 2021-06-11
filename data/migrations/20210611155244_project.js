exports.up = async function (knex) {
	await knex.schema.createTable('projects', (table) => {
		table.increments('project_id')
		table.string('project_name', 128).unique().notNullable()
		table.string('project_description', 128).notNullable()
		table.boolean('project_completed').defaultTo(false)
		table.timestamps(true, true)
	})
}

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('projects')
}
