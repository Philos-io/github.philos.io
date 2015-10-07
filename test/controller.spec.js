var expect = chai.expect;


describe('MainController', function(){

  var scope, ctrl;

  beforeEach(module('github'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();

    ctrl = $controller('ShellController', {
      $scope: scope
    });
  }));

  describe('Scope', function(){
     it('should have a property title', function(){
      expect(ctrl).to.have.property('title').that.is.a('string').that.equal('Main Title');
      expect(ctrl.title).to.equal('Main Title');
    });

    it('should be have property func', function(){
      expect(ctrl.func).to.be.defined;
      expect(ctrl.func).to.be.a('function');
    });
  });
});


// How to create a new scope
