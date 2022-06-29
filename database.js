const database = {
	cart: {
		products: [
			{
				id: "123",
				title: "Wooden Venu",
				description: "bansuri",
			},
			{
				id: "124",
				title: "Morpakha",
				description: "mayur feather",
			},
			{
				id: "125",
				title: "Peet Vastram",
				description: "Yellow Clothes",
			},
		],
		cartItems() {
			return this.products.length;
		},
	},
};
exports.database = database;
