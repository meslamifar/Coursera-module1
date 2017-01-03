(function(){
  'use strict';

  angular.module("MenuApp")
        .component("items", {
            templateUrl: 'src/templates/itemsCompView.html',
            bindings: {
              items: '<'
            }
        });
})();
