import angular from 'angular';
import githubPhilos from './directives/github_philos/';
import githubPhilosTab from './directives/github_philos_tab';

let {module} = angular;

module('github.philos.shell', [])
	.directive('githubPhilos', githubPhilos),
	.directive('githubPhilosTab', githubPhilosTab);
