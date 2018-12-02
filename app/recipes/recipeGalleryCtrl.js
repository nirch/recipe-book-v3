
app.controller("recipeGalleryCtrl", function($scope, recipes) {


    recipes.getActiveUserRecipes().then(function (recipes) {
        $scope.recipes = recipes;
    }, function(error) {
        
    })
})