import angular from 'angular';
import 'angular-route';
import qs from 'qs';

var {
	bootstrap, module
} = angular;


module('github.philos', ['ngRoute']);
	

module('github.philos')
	.controller('ShellController', ShellController)
	.config(function($routeProvider, $locationProvider){

		$routeProvider
			.when('/', {
				template: '',
				controller: function($route){
				}
			})
			.when('/github/callback', {
				template: 'inside callback',
				controller: function($route, $window, $http){
					var code = $route.current.params.code;

					// Save the code in localstorage

					$window.localstorage.code = code;


					var url = "https://github-philos.herokuapp.com/authenticate";

					$http
						.get(url, params)
						.then(function(response){


							debugger
						}, function(err){

							debugger
						})


				}
			});

			$locationProvider.html5Mode(true);
	});


function ShellController($http, $log, $route) {
	$log.debug('inside $log', window.location.origin);


	this.connect = function(){

		var url = "https://github.com/login/oauth/authorize?";

		var options = {
			client_id: "c429929bc446bcd4f31e",
			scope: "user,repo",
			redirect_uri: window.location.origin+ "/github/callback"
		};

		var json = angular.toJson(options);

		window.location = url+ qs.stringify(options);
	}
}

bootstrap(document.body, ['github.philos']);


// f344a987c3d87a83b193

// 7a814ebd607af91f1e36392ba79d097815bb5082


