
app.controller("navbarCtrl", function($scope, user) {
    
    $scope.isUserLoggedIn = function() {
        return user.isLoggedIn();
    }

});