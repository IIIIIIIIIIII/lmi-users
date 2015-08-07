angular.module("main").controller("ResponseController", function($scope, dataService) {
  var data = dataService.getData();
  $scope.response = data.length <= 0 ? "Nothing" : JSON.stringify(data);
});