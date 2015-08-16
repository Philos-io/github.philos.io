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
				controller: function($window, $http){
					if ($window.localStorage.token) {
						debugger;
						$http
							.get()
					}
				}
			})
			.when('/github/callback', {
				template: 'inside callback',
				controller: function($route, $window, $http, $location){
					var code = $route.current.params.code;

					// Save the code in localstorage

					$window.localStorage.code = code;


					var url = "https://philos-github.herokuapp.com/authenticate/"+code;

					debugger

					$http
						.get(url)
						.then(function(response){
							$window.localStorage.token = response.data.token;
							$location.path('/');
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


