import angular from 'angular';
import githubPhilos from './directives/github_philos/'

var {module} = angular;

module('github.philos.shell', [])
	.directive('githubPhilos', githubPhilos);