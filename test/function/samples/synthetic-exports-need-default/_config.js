const path = require('path');

module.exports = {
	description: 'synthetic named exports moduleds need a default export',
	options: {
		plugins: [
			{
				resolveId(id) {
					if (id === './dep.js') {
						return {
							id,
							syntheticNamedExports: true
						};
					}
				}
			}
		]
	},
	error: {
		code: 'SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT',
		id: './dep.js',
		message:
			'Module "./dep.js" that is marked to have "syntheticNamedExports" needs a default export.',
		watchFiles: [path.resolve(__dirname, 'main.js'), './dep.js']
	}
};
