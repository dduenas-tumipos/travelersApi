module.exports = (sequelize, Sequelize) => {
	const Review = sequelize.define("review");
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
		timestamps: true,
		paranoid: true
	});

	Destination.hasMany(Review);

	return Destination;
};