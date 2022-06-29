const express = require("express");
const { database } = require("./database");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());
const takeMeHome = (req, res) => {
	res.send("Radhe Radhe Home Pages");
};

const getCartData = (req, res) => {
	const { id } = req.params;
	console.log(typeof id);
	const product = database.cart.products.find(
		(item) => item.id === id
	);
	product
		? res.json({ product })
		: res.status(404).json({ message: "not found" });
};

const getAllProducts = (req, res) => {
	const productsData = database.cart.products
		.map((item) => `<li>${item.title}</li>`)
		.join("\n");

	res.send(productsData);
};

app.get("/", takeMeHome);
// app.get("/cart", getAllProducts);
app.get("/cart/:id", getCartData);

app.get("/cart", (req, res) => {
	res.json(database.cart.products);
});

app.post("/cart/products", (req, res) => {
	const { product } = req.body;
	product.id = Date.now();
	database.cart.products.push(product);
	res.status(201).json({ product });
});

app.post("/cart/products/:id", (req, res) => {
	const { id } = req.params;
	let { product } = req.body;
	const currentProduct = database.cart.products.find(
		(product) => product.id === id
	);
	product = { ...currentProduct, product };
	res.json({ product });
});

app.listen(process.env.PORT || port, () => {
	console.log("hare krishna server started");
});
