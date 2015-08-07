var deps = ["ngResource", "ngRoute", "main"];

angular.module("lmi-users", deps).config(function($locationProvider) {
  $locationProvider.html5Mode({ // using the HTML5 history API
    enabled: true, requireBase: false
  });
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ["lmi-users"]);
});