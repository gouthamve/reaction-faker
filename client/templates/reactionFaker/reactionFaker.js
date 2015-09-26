Template.reactionFaker.events({
	'click #fake-button': (event, template) => {
		Meteor.call('generateFakeProducts', parseInt(template.$('#numProducts').val()))
	},
	'click #delete-fake-button': (event, template) => {
		Meteor.call('removeFakeProducts');
	}
})

Template.reactionFaker.helpers({
	numFakeProducts: () => {
		Meteor.call('numFakeProducts', (error, count) => {
			Session.set('numFakeProducts', count);
		})

		return Session.get('numFakeProducts') || 0
	}
})
