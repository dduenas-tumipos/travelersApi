module.exports = (sequelize, Sequelize) => {
	const Destination = sequelize.define("destination");
	const Review = sequelize.define("review", {
		destinationId: {
			type: Sequelize.INTEGER,
			foreignKey: true
		},
		ranking: {
		    type: Sequelize.INTEGER
		},
		description: {
		    type: Sequelize.STRING
		}
	}, {
		timestamps: true,
		paranoid: true
	});

	Review.belongsTo(Destination);

	return Review;
};