// on the backend the validation of user data is a lot more strict,
// some of those rules could be moved also to the frontend if needed
angular.module("main").controller("IndexController", function($scope,
                                                              $location,
                                                              dataService,
                                                              utilService,
                                                              User) {
  $scope.user = {};

  $scope.birthday = {
    years : utilService.fillArray(2015, 1900),
    months: utilService.fillArray(1, 12),
    // some months have less days than the others,
    // but that is a problem for another day :)
    days  : utilService.fillArray(1, 31)
  };

  $scope.validateBirthday = function(form) {
    var birthDay = null,
        now      = null;

    if ($scope.birthday.year &&
        $scope.birthday.month &&
        $scope.birthday.day) {
      birthDay = new Date($scope.birthday.year,
                          $scope.birthday.month,
                          $scope.birthday.day);
      now = new Date();
      // checking if the user is older than 18 years;
      // the Date constructor will handle impossible dates too,
      // for example 1950-1-50 or 1950-2-31
      // even though nobody could possibly born on those days
      if (now.getTime() - birthDay.getTime() > 568024668000) {
        form.birthday.$setValidity("userNotOldEnough", true);
      } else {
        form.birthday.$setValidity("userNotOldEnough", false);
      }
    }
  };

  $scope.createUser = function(isValid) {
    var birthday = null;

    if ($scope.birthday.year && $scope.birthday.month && $scope.birthday.day) {
      birthday = $scope.birthday.year + "-" + $scope.birthday.month + "-" + $scope.birthday.day;
    }

    new User({
      fullName   : $scope.user.fullName,
      mailAddress: $scope.user.email,
      occupation : $scope.user.occupation,
      birthday   : birthday
    }).$save().then(function(resp) {
        dataService.clear();
        dataService.addData(resp);
        $location.path("/response");
      }, function(resp) { console.log(resp.data.reason); }
    );
  };
});