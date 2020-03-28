const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
	// async
		var fs = require("fs");
		// request a
		fs.readFile('sync.json','utf8',function(err,data){
			if(!err) {
			console.log(data);
			}
		});
		// request b
		console.log("Asynchronous programming example");
	// server response
	res.json({ message: "Welcome to the application." });
});
// routes
require("./src/routes/destination.routes")(app);
require("./src/routes/review.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});