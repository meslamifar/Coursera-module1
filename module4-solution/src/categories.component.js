(function(){
  'use strict';

  angular.module("MenuApp")
        .component("categories", {
            templateUrl: 'src/templates/categoriesCompView.html',
            bindings: {
              categories: '<'
            }
        });
})();
