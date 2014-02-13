CamelotUnchained.controller("homeController", ["$scope", "httpService", "$route", function($scope, httpService, $route) {

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/sample.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getSampleSuccess = function(payload, status) {
    $scope.sample = payload;
  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getSampleFailure = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getSampleSuccess);

}]);





