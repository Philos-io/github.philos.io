angular.module('App', [])

.controller('MainController',MainController)
.factory('MainFactory', MainFactory);

function MainController(){
  this.title = 'title';
}


function MainFactory(){

  return {
    get: function(){
      return {name: 'davy engone'};
    }
  };
}
