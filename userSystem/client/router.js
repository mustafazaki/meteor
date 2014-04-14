Router.map(
	function() {

		//    this.route('grids', {
		//        path: '/',
		//        template: 'grids'
		//    });
		this.route(
			'login', {
				path: '/login',
				template: 'loginMain',
				onBeforeAction: function() {
					//	login.init();
				}

			});
		this.route(
			'admin', {
				path: '/admin',
				template: 'adminMain',
				onBeforeAction: function() {
				}

			});
		this.route(
			'createusers', {
				path: '/createusers',
				template: 'createuserMain',
				onBeforeAction: function() {
				}

			});
		//    this.route('gridsdetails', {
		//        path: '/gridsdetails',
		//        template: 'gridsdetails',
		//        before: function () {
		//            carurl = window.location.href;
		//
		//            carurl = carurl.split("?");
		//            carurl = carurl[1];
		//
		//
		//
		//        }
		//
		//    });
	});