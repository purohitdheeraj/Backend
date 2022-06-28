const express = require("express");
const { database } = require("./database");

const app = express();
const port = 3000;

const takeMeHome = (req, res) => {
	res.send("Radhe Radhe Home Pages");
};

const getAllProducts = (req, res) => {
	const productsData = database.products
		.map((item) => `<li>${item.title}</li>`)
		.join("\n");

	res.send(productsData);
};

app.get("/", takeMeHome);
app.get("/products", getAllProducts);

app.listen(process.env.PORT || port, () => {
	console.log("hare krishna server started");
});
