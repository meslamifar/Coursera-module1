(function(){

  'use strict';

  angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearch)
        .directive("foundItems", FoundItems);



MenuSearch.$inject = ['$http', '$q'];
function MenuSearch($http, $q){

  var service = this;

  service.getMatchedMenuItems = function(filter){

    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function(rsp){

        var foundItems = filterResponse(rsp.data.menu_items, filter);
        deferred.resolve(foundItems);

    }, function(err){
        var foundItems = [];
        deferred.reject(foundItems);
    });

    return deferred.promise;
  }

 function filterResponse( items, filter ){

   var foundItems = [];

   for (var k=0; k < items.length; ++k){
     if (items[k].description.indexOf(filter) !== -1)
        foundItems.push(items[k]);
   }
    return foundItems;
 }
}

function FoundItems(){
  var ddo = {
    restrict : 'E',
    scope : {
      foundItems : '<',
      onRemove : '&'
    },
    templateUrl : 'directivetemplate.html'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

  var ctrl = this;
  ctrl.foundItems = [];
  ctrl.errorMessage = false;

  ctrl.getFilterItems = function(){

    if (ctrl.filterTerm == ""){
      ctrl.foundItems = [];
      ctrl.errorMessage = true;
    }
    else {
      MenuSearchService.getMatchedMenuItems(ctrl.filterTerm).then(
        function(rsp){
          ctrl.foundItems = rsp;
          ctrl.errorMessage = !rsp || rsp.length == 0;
        }
      );
    }
  }

  ctrl.removeItem = function(index){
    ctrl.foundItems.splice(index, 1);
  }
}

})();
