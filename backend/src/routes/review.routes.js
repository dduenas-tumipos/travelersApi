module.exports = app => {
	const controller = require("../controllers/reviews/review.controller");
	var router = require("express").Router();
	// Routes
	router.post("/", controller.createNew);
	router.get("/", controller.getList);
	router.get("/:id", controller.getById);
	router.put("/:id", controller.putUpdate);
	router.delete("/:id", controller.delete);
	// Route assignment
	app.use('/api/reviews', router);
};
