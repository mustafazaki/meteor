var app = {

	addEventListner: function() {
		Template.admin.events(
			{
				'click #SignOut': function() {
					//	alert("asdasd");
					localStorage.userId = "";
					Router.go('login');

				}
			})
	},
	checkLogStatus: function() {
		//Router.onRun(
		//function() {
		if (localStorage.userId !== "") {
			Router.go('admin');
			console.log("LoggedIn");
		}
		else {
			//	Router.onRun(
			//		function() {
			Router.go('login');
			console.log("NotLoggedIn");
			//		});
		}
		//});
		////	console.log(Router)
	},
	init: function() {
		app.addEventListner();
	}








}
if (Meteor.isClient) {
	setTimeout(
		function() {
			app.checkLogStatus();
		}, 10);
	app.init()
}