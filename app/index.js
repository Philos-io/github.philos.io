import angular from 'angular';
import 'angular-route';
import qs from 'qs';
import './assets/css/main.css';

var {
	bootstrap, module
} = angular;


module('github.philos', ['ngRoute']);
	

module('github.philos')
	.config(function($routeProvider, $locationProvider){

		$routeProvider
			.when('/:login', {
				template:'user.html',
				controllerAs: 'user',
				controller: function($http, $routeParams, $log){

					var url = 'https://api.github.com/users/'+$routeParams.login;


					$http
						.get(url)
						.then(function(response){

							this.model = response.data;

							debugger

							// Define all the calls to get more data
						});
				}
			});
	})
	.directive('githubNavbar', function(){
		return {
			templateUrl: 'templates/github-navbar.html'
		}
	});
















bootstrap(document.body, ['github.philos']);

// function ShellController($http, $log, $route) {
// 	$log.debug('inside $log', window.location.origin);
// 	this.connect = function(){

// 		var url = "https://github.com/login/oauth/authorize?";

// 		var options = {
// 			client_id: "c429929bc446bcd4f31e",
// 			scope: "user,repo",
// 			redirect_uri: window.location.origin+ "/github/callback"
// 		};

// 		var json = angular.toJson(options);

// 		window.location = url+ qs.stringify(options);
// 	}
// }




			// .when('/github/callback', {
			// 	template: 'inside callback',
			// 	controller: function($route, $window, $http, $location){
			// 		var code = $route.current.params.code;

			// 		// Save the code in localstorage

			// 		$window.localStorage.code = code;

			// 		var url = "https://philos-github.herokuapp.com/authenticate/"+code;

			// 		debugger

			// 		$http
			// 			.get(url)
			// 			.then(function(response){
			// 				$window.localStorage.token = response.data.token;
			// 				$location.path('/');
			// 			}, function(err){

			// 				debugger
			// 			});
			// 	}
			// });

			// //$locationProvider.html5Mode(true);
