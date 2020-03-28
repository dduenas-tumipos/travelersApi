module.exports = (sequelize, Sequelize) => {
    const Destination = sequelize.define('Destination', { name: Sequelize.STRING });
	const Review = sequelize.define("review", {
        destinationId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            references: {
                model: Destination, // 'Destinations' would also work
                key: 'id'
            },
        },
		ranking: {
		    type: Sequelize.INTEGER
		},
		description: {
		    type: Sequelize.STRING
		}
	}, {
		timestamps: true
    });
    
    Review.belongsTo (Destination, { foreignKey: 'destinationId', targetKey: 'id'});

	return Review;
};