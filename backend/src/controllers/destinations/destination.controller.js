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
				message: err.message || "Some error occurred while creating the destination."
			});
		} else {
			res.send(data);
		}
	});
};
exports.getList = (req, res) => {
	// Go to persistance layer
	LogicLayer.getList(req.query, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving destinations."
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
				message: err.message || "Error retrieving destination with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found destination with id=" + req.params.id
				});
			}
		}
	});
};
exports.putUpdate = (req, res) => {
	// Go to persistance layer
	LogicLayer.putUpdate(req.params.id, req.body, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Error updating destination with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found destination with id=" + req.params.id
				});
			}
		}
	});
};
exports.delete = (req, res) => {
	// Go to persistance layer
	LogicLayer.delete(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Could not delete destination with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found destination with id=" + req.params.id
				});
			}
		}
	});
};