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
				//templateUrl:'templates/user.html',
				template: '<gp-user-profile/>'

			});
	})
	.directive('gpNavbar', function(){
		return {
			templateUrl: 'templates/github-navbar.html'
		}
	})
	.directive('gpUserProfile', function(){
		return {
			templateUrl: 'templates/github-main.html',
			controllerAs: 'user',
			controller: function($q,$http, $routeParams, $log){

				var url = 'https://api.github.com/users/'+$routeParams.login;

				var vm = this;

				$http
				.get(url, {cache: true})
				.then(function(response){

					vm.model = response.data;

					let starredPromise = $http.get(url+ '/starred', {cache: true});
					let organisationsPromise	= $http.get(vm.model.organizations_url, {cache: true});
					let reposPromise = $http.get(vm.model.repos_url, {cache: true});


					$q.all([starredPromise, organisationsPromise, reposPromise])
					.then(function(responses){

						// Gets the number of stars
						var starred = responses[0].data;
						vm.model.stars = starred;

						// Gets the list of organisations
						var organisations = responses[1].data;
						vm.model.organisations = organisations;

						// Get the repos
						var repos = responses[2].data;
						vm.model.repos = repos.sort(function(repo1, repo2){
							if(repo1.stargazers_count > repo2.stargazers_count)  return -1;
							if(repo1.stargazers_count < repo2.stargazers_count) return 1;
							if(repo1.stargazers_count === repo2.stargazers_count) return 0;
						});
					});
				});
			}
		};
	});
	bootstrap(document.body, ['github.philos']);
