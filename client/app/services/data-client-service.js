angular.module("main").factory("dataService", function() {
  var data = []; // for sharing data between the two controller

  var addData = function(obj) { data.push(obj); };
  var getData = function() { return data; }
  var clear = function() { data = []; };

  return { addData: addData, getData: getData, clear: clear };
});