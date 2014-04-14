if (Meteor.isServer) {
	Meteor.startup(function() {
		User.allow({

			'insert': function(userId, doc) {
				return true;
			},
			'remove': function(userId, doc) {
				return true;
			},
			'update': function(userId, doc) {
				return true;
			}



		});



		///User.remove({});
	});
}