
app.controller("newRecipeCtrl", function ($scope, recipes, $location, user) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createRecipe = function () {
        recipes.createRecipe($scope.name, $scope.description,
            $scope.ingrediants, $scope.steps, $scope.image.src).then(function () {
            
            // EmailJS
            var template_params = {
                to_email: user.getActiveUser().email,
                from_name: "Recipe Book LTD",
                to_name: user.getActiveUser().fname + " " + user.getActiveUser().lname,
                message_html: "You created a new Recipe: " +  $scope.name
            }

            var service_id = "default_service";
            var template_id = "template_xCWGuwyh";
            emailjs.send(service_id, template_id, template_params);

                $location.path("/recipes")
            }, function (err) {
                console.log(err);
            })
    }
})