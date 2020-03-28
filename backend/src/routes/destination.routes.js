module.exports = app => {
	const controller = require("../controllers/destinations/destination.controller");
	var router = require("express").Router();
	// Routes
	router.get("/", controller.getList);
	router.post("/", controller.createNew);
	router.get("/:id", controller.getById);
	router.put("/:id", controller.putUpdate);
	router.delete("/:id", controller.delete);
	// Route assignment
	app.use('/api/destinations', router);
};
