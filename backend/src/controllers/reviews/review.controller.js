const LogicLayer = require("./review.logic");
//  CRUD
exports.createNew = (req, res) => {
	// Validate request
	if (!req.body.ranking) {
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
	LogicLayer.getList(req.query, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving reviews."
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
				message: err.message || "Error retrieving review with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found review with id=" + req.params.id
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
				message: err.message || "Error updating review with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found review with id=" + req.params.id
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
				message: err.message || "Could not delete review with id=" + req.params.id
			});
		} else {
			if (data) {
				res.send(data);				
			} else {
				res.status(404).send({
					message: "Not found review with id=" + req.params.id
				});
			}
		}
	});
};