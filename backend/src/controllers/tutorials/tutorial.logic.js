const db = require("../../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
// LOGIC
exports.createNew = (params, result) => {
	Tutorial.create(params)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getList = (params, result) => {
	const title = params.title;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	Tutorial.findAll({ where: condition })
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.getById = (id, result) => {
	Tutorial.findByPk(id)
		.then(data => {
			result(null, data);
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.putUpdate = (id, result) => {
	Tutorial.update(req.body, {where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, data);
				// res.send({
				// 	message: "Tutorial was updated successfully."
				// });
			} else {
				result(null, data);
				// res.send({
				// 	message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
				// });
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};
exports.delete = (id, result) => {
	// Tutorial.destroy({
	// 	where: {},
	// 	truncate: false
	// })
	Tutorial.destroy(req.body, {where: { id: id }})
		.then(num => {
			if (num == 1) {
				result(null, data);
				// res.send({
				// 	message: "Tutorial was deleted successfully."
				// });
			} else {
				result(null, data);
				// res.send({
				// 	message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
				// });
			}
		})
		.catch(err => {
			result(err, null);
			return;
		});
};