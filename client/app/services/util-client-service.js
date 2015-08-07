angular.module("main").factory("utilService", function($resource) {

  var fillArray = function(from, until) {
    var arr = [];
    if (until > from) {
      for (var i = from; i <= until; i += 1) { arr.push(i); }
    } else {
      for (var i = from; i >= until; i -= 1) { arr.push(i); }
    }
    return arr;
  };

  return { fillArray: fillArray };
});