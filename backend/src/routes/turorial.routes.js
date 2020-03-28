module.exports = app => {
	const tutorials = require("../controllers/tutorials/tutorial.controller");
	var router = require("express").Router();
	// Routes
	router.post("/", tutorials.createNew);
	router.get("/", tutorials.getList);
	router.get("/:id", tutorials.getById);
	router.put("/:id", tutorials.putUpdate);
	router.delete("/:id", tutorials.delete);
	// Route assignment
	app.use('/api/tutorials', router);
};
