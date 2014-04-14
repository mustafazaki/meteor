var createUser = {


	validationAndCreateUser: function() {
		var userName = document.getElementById("username"),
			password = document.getElementById("password"),
			email = document.getElementById("email"),
			role = document.getElementById("role"),
			submit = $("#submit"),
			emailExists = null,
			error = $("#Error");
		if (userName.checkValidity() && password.checkValidity() && email.checkValidity() && role.checkValidity()) {

			$("input,select").removeClass("error");
			try {
				User.find({}).forEach(
					function(user) {
						if (email.value === user.email) {
							emailExists = true;
							//return false;
							throw new Error(); // Simulated break
						}
						else {
							emailExists = false;
							//console.log("else")
						}
						console.log(user.email);
						console.log(email.value === user.email)
					});
			}
			catch (e) {}

			if (emailExists) {

				error.text("Email Already Exists").fadeIn().delay(1000).fadeOut();
			}
			else {
				User.insert(
					{
						email: email.value,
						password: password.value,
						role: role.options[role.selectedIndex].text,
						name: userName.value

					});
				createUser.clearValues();
			}
		}
		else {
			error.text("Please Fill Required Field").fadeIn().delay(1000).fadeOut();

			submit.removeAttr("disabled");
			$("input,select").removeClass("error");
			$("input:invalid,select:invalid").addClass("error");

		}
	},
	addEventListner: function() {
		Template.createuser.events(
			{
				'click #submit': function() {
					createUser.validationAndCreateUser();
					//	console.log(createUser.userName.val());
				}
			});
		Template.createuser.UserTable = function() {
			return User.find({});
		}
	},
	init: function() {
		createUser.addEventListner()
	},
	clearValues: function() {
		$("input.form-control").val("");
		$("select.form-control").val($("select.form-control option:first").val());
	}




}
if (Meteor.isClient) {
	createUser.init();
}