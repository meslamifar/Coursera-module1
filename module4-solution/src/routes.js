(function(){

  'use strict';

  angular.module('MenuApp')
        .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function Config($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'src/templates/home.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl: 'src/templates/categoriesView.html',
      controller: 'categoryController as categoryCtrl',
      resolve:{
        categories : [ 'MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]}
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/itemsView.html',
      controller: 'itemController as itemCtrl',
      resolve:{
        items: ['$stateParams', 'MenuDataService', function( $stateParams, MenuDataService ){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    })
  }



})();
