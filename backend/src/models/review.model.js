module.exports = (sequelize, Sequelize) => {
	const Review = sequelize.define("review", {
		ranking: {
		    type: Sequelize.INTEGER
		},
		description: {
		    type: Sequelize.STRING
		}
	}, {
        timestamps: true,
        underscored: false
        // createdAt
        // created_at
    });

	return Review;
};