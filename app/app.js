
var app = angular.module("recipeBookApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"

    }).when("/signup", {

    }).when("/recipes", {

    }).when("/new" , {

    }).when("/recipe/:id" , {

    })
})