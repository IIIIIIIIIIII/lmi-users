angular.module("main").directive("autoComplete", function($http) {
  return {
    restrict: "A",
    templateUrl: "/app/views/autocomplete-client-template.html",
    link: function(scope, elem, attrs) {

      // occupation is hardcoded here right now,
      // also could come from the server, based on the occupations
      // given by other users
      scope.occupations = ["Programmer", "Developer", "Dentist"];
      scope.suggestions = [];
      scope.focus = false;

      scope.search = function() {
        scope.suggestions = [];
        for (var i = 0; i < scope.occupations.length; i += 1) {
          if (scope.occupations[i].toLowerCase()
                                  .indexOf(scope.searchText.toLowerCase()) > -1) {
            scope.suggestions.push(scope.occupations[i]);
          }
        }
        if (scope.suggestions.length < 1) {
          scope.focus = false;
        } else {
          scope.focus = true;
        }
      };

      scope.selectSuggestion = function(index) {
        scope.searchText = scope.suggestions[index];
        scope.focus = false;
      };
    }
  };
});