(function(){
  'use strict';
  angular.module('data')
    .service('UserdataService', UserdataService);

  UserdataService.$inject = ['MenuService']
  function UserdataService(MenuService){
    var userdata = this;
    userdata.user = {};

    userdata.saveSignupForm = function(user){
      userdata.user = user;
      userdata.user.registered = true;
    }

    userdata.getUserInfo = function(){
      return userdata.user;
    }

    userdata.validate = function(short_name){
      return MenuService.getMenuItems(short_name).menu_items;
    }
  }
})()
