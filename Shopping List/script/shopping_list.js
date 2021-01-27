angular.module('shopping', [])
    .controller('shoppingListController', ['$scope', function($scope){
        $scope.newItems = [{product:'chips',quantity:1}];

        $scope.addNew = function(){
            if($scope.quantity > 0){
                $scope.newItems.push({'product': $scope.product,
                                    'quantity': $scope.quantity})
            }else{
                $scope.newItems.push({'product': $scope.product,
                                    'quantity': 1})
            }
            $scope.product = ''
            $scope.quantity = 1
        }
        $scope.deleteItem = function(index){
            $scope.newItems.splice(index,1);
        }
    }])
