angular.module('shopping', [])
    .controller('shoppingListController', ['$scope', function($scope){
        $scope.newItems = ['category',];

        $scope.addNew = function(){
            $scope.newItems.push({'category': $scope.category, 
                                'product': $scope.product,
                                 'quantity': $scope.quantity})
            $scope.category = ''
            $scope.product = ''
            $scope.quantity = ''
        }
        $scope.deleteItem = function(index){
            $scope.newItems.splice(index,1);
        }
    }])
