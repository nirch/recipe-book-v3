
app.controller("loginCtrl", function($scope, $location) {
    
    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;
        
        if ($scope.email === "nir@nir.com" && $scope.pwd === "123") {
            // success login
            $location.path("/recipes")
        } else {
            // failed login
            $scope.invalidLogin = true;
        }
    }
});