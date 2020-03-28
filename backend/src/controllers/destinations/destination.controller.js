const LogicLayer = require("./destination.logic");
//  CRUD
exports.createNew = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({message: "Content can not be empty!"});
		return;
	}
	// Go to persistance layer
	LogicLayer.createNew(req.body, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the tutorial."
			});
		} else {
			res.send(data);
		}
	});
};
exports.getList = (req, res) => {
	// Go to persistance layer
	LogicLayer.getList(req.params, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving tutorials."
			});
		} else {
			res.send(data);
		}
	});
};
exports.getById = (req, res) => {
	// Go to persistance layer
	LogicLayer.getById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Error retrieving Tutorial with id=" + req.params.id
			});
		} else {
			res.send(data);
		}
	});
};
exports.putUpdate = (req, res) => {
	// Go to persistance layer
	LogicLayer.putUpdate(req.params.id, req.body, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Error updating Tutorial with id=" + req.params.id
			});
		} else {
			res.send(data);
		}
	});
};
exports.delete = (req, res) => {
	// Go to persistance layer
	LogicLayer.delete(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Could not delete Tutorial with id=" + req.params.id
			});
		} else {
			res.send(data);
		}
	});
};