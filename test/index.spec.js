//
//
// describe('Testing MainController', function () {
// 	var main, scope;
//
// 	beforeEach(module('App'));
//
// 	beforeEach(inject(function ($controller, $rootScope) {
// 		scope = $rootScope.$new();
//
// 		main = $controller('MainController', {
// 			$scope: scope
// 		});
//
// 	}));
//
// 	it('should have a property title', function () {
// 		console.log(main.title);
//
// 		expect(main.title).toEqual('title');
// 	});
//
// });
//
//
// describe('Testing a service', function(){
//
// 	beforeEach(module('App'));
//
// 	var factory, httpBackend;
//
// 	beforeEach(inject(function(_MainFactory_, $httpBackend){
// 		factory = _MainFactory_;
// 		httpBackend = $httpBackend;
// 	}));
//
// 	it('should return an object', function(){
// 		httpBackend.whenGET('/user')
// 			.response(200, {login: 'davyengone'});
//
// 		httpBackend.flush();
// 	});
//
// });
//
// describe('Testing directive', function(){
// 	var scope, element;
//
// 	beforeEach(module('App'));
//
// 	beforeEach(inject(function($rootScope, $compile){
//
// 		scope = $rootScope.$new();
//
// 		element = '<>'
//
// 	}))
//
// });
