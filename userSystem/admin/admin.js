//User = new Meteor.Collection("customUser");
if (Meteor.isClient) {
	//console.log(Session.get("loggedInUser"));
	//console.log(localStorage.userId);
	//Template.admin.userName = function(){

	Template.admin.userName = function() {
		var userInformation = User.findOne({_id: localStorage.userId});
		return (userInformation !== undefined) ? userInformation.name : "...";
	}
}