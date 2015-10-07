(function(){
  'use strict';

  angular.module('github', [])
    .controller('ShellController', MainController);


    function MainController(){
      this.title = "";
      this.func = function(){}
    }
})();
