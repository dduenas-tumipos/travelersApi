module.exports = (sequelize, Sequelize) => {
	const Destination = sequelize.define("destination", {
		name: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		available: {
			type: Sequelize.BOOLEAN
		}
	}, {
		timestamps: false
	});

	return Destination;
};