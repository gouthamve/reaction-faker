ReactionCore.registerPackage({
	name: "reaction-faker",
	icon: "fa fa-bar-chart-o",
	autoEnable: false,
	registry: [{
		provides: "dashboard",
		label: "Reaction Faker",
		description: "Fake Data for testing/viewing purposes",
		route: "dashboard/reactionFaker",
		icon: "fa fa-bar-chart-o",
		cycle: 4,
		container: "dashboard"
	}],
	permissions: [{
		label: "Reaction Faker",
		permissions: "dashboard/settings",
		group: "Shop Settings"
	}]
})
