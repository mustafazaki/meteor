User = new Meteor.Collection("customUser");
//usersData = new Meteor.Collection("usersdata");
var login = {
	addEventListner: function() {
		//	alert("dsa");
		Template.loginDialog.events(
			{
				'click #sign-in': function() {
					var email = document.getElementById("input-email").value,
						password = document.getElementById("input-password").value,
						remember = $("#remember");
					//	if (email === User.findOne().email && password === User.findOne().password) {
					login.validation();

					try {
						User.find({}).forEach(
							function(user) {
								if (email === user.email && password === user.password) {
									validUser = true;
									//return false;
									throw new Error(); // Simulated break
								}
								else {
									validUser = false;
									//console.log("else")
								}
							});
					}
					catch (e) {}

					console.log(validUser);


					if (validUser) {
						localStorage.userId = User.findOne({email: email})._id;
						if (remember.is(":checked")) {
							localStorage.password = password;
							localStorage.email = email;
							localStorage.isChecked = "true"
						}
						else {
							localStorage.clear();
						}
						Router.go('admin');
					}
				}
			});
	},
	setAdminCredintals: function() {
		if (Meteor.status().status === "connected") {
			try {
				//User.findOne().adminCreated;
				console.log("try");
			}
			catch (e) {
				//	User.insert({email: "admin@admin.com", password: "admin", role: "admin", name: "Mustafa Zaki"});
				console.log("catch")
			}
		}
		//
	},
	rememberMe: function() {
		var email = document.getElementById("input-email"),
			password = document.getElementById("input-password"),
			remember = $("#remember");
		if (localStorage.email !== undefined && localStorage.password !== undefined) {
			email.value = localStorage.email;
			password.value = localStorage.password;
			//	console.log(localStorage);
			remember.prop('checked', true);
		}
	},
	validation:function(){
		var email = document.getElementById("input-email"),
			password = document.getElementById("input-password");
		if(email.checkValidity() && password.checkValidity()){

			$("input").removeClass("error");
			$("input:invalid").addClass("error");
		}

	},
	debug: function() {

		//	setInterval(
		//function() {
		//		Meteor.onConnection(
		//			function() {
		//				console.log(User.findOne({_id: "YePpZg4kaS7W5tjHx"}))
		//			});
		//	}, 100)
		//	Meteor.startup(function(){
		//console.log(User.findOne({_id: "YePpZg4kaS7W5tjHx"}))
		//		Meteor.call(function(){
		//			console.log(Meteor.status());
		//		})
		//	console.log(Meteor.status());
		//	})
	},
	init: function() {
		login.debug();
		login.setAdminCredintals();
		login.addEventListner();
	}




};
if (Meteor.isClient) {
	Template.loginMain.rendered = function() {
		login.rememberMe();
	}
	//login.debug();
	///	setTimeout(function(){
	login.init();
	//Template.loginDialog.rendered = function() {console.log(User.findOne({_id: "YePpZg4kaS7W5tjHx"})) }
	//Session.set("loggedInUserId", "CvLMj2qStm8Z7z9h5");
	//},1000);
}