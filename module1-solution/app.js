(function(){

  "use strict";
  angular.module("LunchCheck", [])
          .controller("LunchCheckController", LunchCheckCtr);

  LunchCheckCtr.$inject = ['$scope'];

  function LunchCheckCtr($scope){

    $scope.CheckIfTooMuch = function(){
      var parsedItems = $scope.Items.split(',');
      var message;

      if (parsedItems.length > 3)
       message = "Too much!";
      else if (parsedItems == 0)
        message= "Please enter data first.";
      else
        message = "Enjoy!";

      alert(message);
  }
}

})();
