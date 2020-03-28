const db = require("../../models");
const Destination = db.destinations;
const Op = db.Sequelize.Op;
// LOGIC
exports.createNew = (params, result) => {
	Destination.create(params)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getList = (params, result) => {
	const name = params.name;
	var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
	Destination.findAll({ where: condition })
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getById = (id, result) => {
	Destination.findByPk(id)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.putUpdate = (id, params, result) => {
	Destination.update(params, {where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, {changes: true});
			} else {
				result(null, {changes: false});
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.delete = (id, result) => {
	// Destination.destroy({
	// 	where: {},
	// 	truncate: false
	// })
	Destination.destroy({where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, {deleted: true});
			} else {
				result(null, {deleted: false});
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};