angular.module("main").config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/partials/index-client-view",
      controller : "IndexController"
    })
    .when("/response", {
      templateUrl: "/partials/response-client-view",
      controller : "ResponseController"
    })
    .otherwise({
      redirectTo: "/"
    });
});