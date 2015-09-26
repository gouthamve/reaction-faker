const InsertFakeProduct = () => {
	let product = faker.commerce.product();
	let productName = faker.commerce.productName();
	let fakeProduct = {
		description: faker.lorem.paragraph(),
		isVisible: true, // Should it be boolean?
		metafields: [{
			key: faker.commerce.productAdjective(),
			value: faker.commerce.productMaterial()
		}],
		pageTitle: productName,
		title: productName,
		variants: [{
			_id: Random.id(),
			title: faker.commerce.productName(),
			price: faker.commerce.price(),
			inventoryManagement: true,
			inventoryPolicy: true,
			inventoryQuantity: faker.random.number(),
			taxable: false,
			type: "variant"
		}, {
			_id: Random.id(),
			title: faker.commerce.productName(),
			price: faker.commerce.price(),
			inventoryManagement: true,
			inventoryPolicy: true,
			inventoryQuantity: faker.random.number(),
			taxable: false,
			type: "variant"
		}, {
			_id: Random.id(),
			title: faker.commerce.productName(),
			price: faker.commerce.price(),
			inventoryManagement: true,
			inventoryPolicy: true,
			inventoryQuantity: faker.random.number(),
			taxable: false,
			type: "variant"
		}],
		vendor: faker.company.companyName(),
		shopId: ReactionCore.getShopId(),
		requiresShipping: faker.random.boolean(),
		faked: true
	}

	Meteor.call('createProduct', fakeProduct);
}

const removeFakeProducts = () => {
	ReactionCore.Collections.Products.remove({faked: true});
}

Meteor.methods({
	generateFakeProducts: function(numProducts) {
		check(numProducts, Number);
		if (numProducts) {
			for (let i = 0; i < numProducts; i++) {
				InsertFakeProduct();
			}
		}
	},
	removeFakeProducts: removeFakeProducts,
	numFakeProducts: () => ReactionCore.Collections.Products.find({faked: true}).count()
})
