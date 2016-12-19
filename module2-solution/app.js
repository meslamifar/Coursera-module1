(function () {
    
'use strict';  

angular.module("ShoppingListCheckOff",[])
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .controller("ToBuyController", ToBuyController)
        .service("ShoppingListCheckOff", ShoppingListCheckOffService);
 

function ShoppingListCheckOffService(){
    
    var service = this;
    
    service.toBuyList = [
       { name: "cookies", quantity: 10 },
       { name: "milk", quantity: 2 },
       { name: "chips", quantity: 10 },
       { name: "gum", quantity: 1 },
       { name: "apple", quantity: 3 }                           
    ];
    
    service.alreadyBoughtList = [];
    
    service.messages = { isAlreadyBoughtListEmpty : true , isToBuyListEmpty : false };
    
    service.getToBuyList = function(){
        return service.toBuyList;
    }
    
    service.getAlreadyBoughtList = function(){
        return service.alreadyBoughtList;
    }
    
    service.updateShoppingList = function(index){
        var boughtItem = service.toBuyList[index];
        service.toBuyList.splice(index,1);
        service.alreadyBoughtList.push(boughtItem);
        
        service.updateMessages();
    }
    
    service.updateMessages = function(){
        service.messages.isAlreadyBoughtListEmpty = service.alreadyBoughtList.length == 0;
        service.messages.isToBuyListEmpty = service.toBuyList.length == 0;
    }
    
    service.getMessages = function(){        
        return service.messages;
    }
    
        
}  

ToBuyController.$inject = ['ShoppingListCheckOff', '$scope'];
function ToBuyController(ShoppingListCheckOff, $scope){
    
    var toBuy = this;
    
    console.log($scope);
    toBuy.toBuyList = ShoppingListCheckOff.getToBuyList();
    
    toBuy.updateShoppingList = function(index){
        ShoppingListCheckOff.updateShoppingList(index);
    }
    
    toBuy.messages = ShoppingListCheckOff.getMessages();
}
    
AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];    
function AlreadyBoughtController(ShoppingListCheckOff){
    
    var alreadyBought = this;
    
    alreadyBought.alreadyBoughtList = ShoppingListCheckOff.getAlreadyBoughtList(); 
    
    alreadyBought.messages = ShoppingListCheckOff.getMessages();
    
}  
 })();
    