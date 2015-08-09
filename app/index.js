import angular from 'angular';

var {
	bootstrap, module
} = angular;


module('github.philos', [])
	.directive('githubPhilos', function(){
		
		return {
			restrict: 'E',
			template:'the apps is running'
		};
	});

bootstrap(document.body, ['github.philos']);
