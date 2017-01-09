(function(){
  'use strict';

  angular.module('public')
  .controller('signupController', signupController );

  signupController.$inject = ['UserdataService'];
  function signupController(UserdataService){
    var signupCtrl = this;

    signupCtrl.submit = function(){
      var validated = UserdataService.validate(signupCtrl.user.favoritemenuitem)

      if (validated){
          UserdataService.saveSignupForm(signupCtrl.user);
          signupCtrl.user.invalid = false;
      }
      else {
        signupCtrl.user.invalid = true;
      }
    }
  }

})();
