(function(){
  'use strict';

    angular.module('MenuApp')
            .controller('categoryController', [ 'categories', function(categories){

              var categoryCtrl = this;
              this.categories = categories;

            }])
            .controller('itemController', [ 'items', function(items){

              var itemCtrl = this;
              this.items = items;
            }])


})();
