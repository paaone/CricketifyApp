var app = angular.module('myApp', []);
app.controller('ScorecardController', function ($scope) {
    $scope.ScoresTable = [{ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, wicket: "Wicket", extra: "Extras" }];

    $scope.batsmanOne = "Sai";
    $scope.batsmanTwo = "Pavan";
    $scope.runs = 0;
    $scope.totalBls = 0;
    $scope.fours = 0;
    $scope.sixers = 0;
    $scope.strikeRate = function () {
        if ($scope.totalBls == 0) {
            return 0;
        }
        else {
            return (($scope.runs / $scope.totalBls)*100).toFixed(2);
        }        
    }
    $scope.handleScorecardClick = function (id) {
        if (id == 0 || id == 1 || id == 2 || id == 3 || id == 4 || id == 5 || id == 6) {
            $scope.totalBls++;
            $scope.runs += id;
            if (id == 4) {
                $scope.fours++;
            }
            else if (id == 6) {
                $scope.sixers++;
            }
        }
    }
});