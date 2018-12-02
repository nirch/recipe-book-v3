
app.controller("newRecipeCtrl", function($scope, recipes) {
    
    $scope.createRecipe = function () {
        recipes.createRecipe($scope.name, $scope.description, 
            $scope.ingrediants, $scope.steps,  $scope.image).then(function () {
            $location.path("/recipes")
        }, function (err) {
            console.log(err);
        })
    }

})