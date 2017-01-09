(function(){
  'use strict';

  angular.module('public')
  .controller('userinfoController', userinfoController );

  userinfoController.$inject = ['UserInfo'];
  function userinfoController(UserInfo){
    var userinfoCtrl = this;

    userinfoCtrl.user = UserInfo;
  }

})();
