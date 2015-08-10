import angular from 'angular';
import '../lib/shell/';

var {
	bootstrap, module
} = angular;


module('github.philos', ['github.philos.shell'])
	
bootstrap(document.body, ['github.philos']);
