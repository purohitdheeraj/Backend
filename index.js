const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hare Krishna To Express");
});

app.listen(process.env.PORT || port, () => {
	console.log("hare krishna server started");
});
