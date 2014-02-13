CamelotUnchained.controller("homeController", ["$scope", "httpService", "$route", function($scope, httpService, $route) {

  // This is the string that defines where the JSON endpoint resides.
  var apiEndpoint = '/sample.json';

  // This is the callback function that executes if the HTTP requests returns successfully.
  var getTakedownsSuccess = function(payload, status) {
    $scope.takedowns = payload;
    $scope.players = {};
    for(var i=0; i < payload.length; i++) {
      var interaction = payload[i];
      if ($scope.players[interaction["victim"]["name"]]) {
        $scope.players[interaction["victim"]["name"]]["deaths"] += 1;
      }
      else {
        $scope.players[interaction["victim"]["name"]] = {
          "name": interaction["victim"]["name"],
          "faction": interaction["victim"]["faction"],
          "kills": 0,
          "deaths": 1
        }
      }
      if ($scope.players[interaction["killer"]["name"]]) {
        $scope.players[interaction["killer"]["name"]]["kills"] += 1;
      }
      else {
        $scope.players[interaction["killer"]["name"]] = {
          "name": interaction["killer"]["name"],
          "faction": interaction["killer"]["faction"],
          "kills": 1,
          "deaths": 0
        }
      }
    }
    console.log($scope.players);
  };

  // This is the callback function that executes if the HTTP requests returns unsuccessfully.
  var getTakedownsFailure = function(payload, status) {};

  // Initiate the HTTP request.
  httpService.getApiEndpoint(apiEndpoint).success(getTakedownsSuccess);

}]);





