fakedSchema = new SimpleSchema({
	faked: {
		type: Boolean,
		optional: true
	}
})

ReactionCore.Collections.Products.attachSchema(fakedSchema);
