var routes = function($routeProvider){

	$routeProvider
		.when('/', {
			template: require('../views/home.html')
		});
}

routes.$inject = ['$routeProvider'];

module.exports = routes;