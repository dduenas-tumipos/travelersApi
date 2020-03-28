const db = require("../../models");
const Review = db.reviews;
const Destination = db.destinations;
const Op = db.Sequelize.Op;
// LOGIC
exports.createNew = (params, result) => {
	Review.create(params)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getList = (params, result) => {
	const ranking = params.ranking;
	var condition = ranking ? { ranking: { [Op.like]: `%${ranking}%` } } : null;
	Review.findAll({ where: condition})
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getById = (id, result) => {
    Review.findByPk(id)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.putUpdate = (id, params, result) => {
	Review.update(params, {where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, data);
			} else {
				result(null, data);
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.delete = (id, result) => {
	Review.destroy({}, {where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, data);
			} else {
				result(null, data);
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};