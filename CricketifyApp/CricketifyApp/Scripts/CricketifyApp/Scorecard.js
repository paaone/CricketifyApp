var consecutiveDotBallsCount = 0;
var oversDecimalCount = 0.0;
var oversCount = 0;
var app = angular.module('myApp', []);
app.controller('ScorecardController', function ($scope) {
    $scope.ScoresTable = [{ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, wicket: "Wicket", extra: "Extras" }];

    $scope.batsmanOne = "Sai";
    $scope.batsmanTwo = "Paaone";
    $scope.runs = 0;
    $scope.totalBls = 0;
    $scope.fours = 0;
    $scope.sixers = 0;
    $scope.bowlerOne = "S Bond";
    $scope.bowlerTwo = "B Lee";
    $scope.overs = 0.0;
    $scope.maidens = 0;
    $scope.bowlingRuns = 0;
    $scope.wickets = 0;
    $scope.economyRate = function () {
        if ($scope.overs == 0) {
            return 0;
        }
        else {
            return ($scope.bowlingRuns / $scope.overs).toFixed(2);
        }
    }
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
            oversDecimalCount++;
            if (oversDecimalCount == 6) {
                oversCount++;
                $scope.overs = oversCount;
                oversDecimalCount = 0.0;
            }
            else {
                $scope.overs = oversCount + "." + oversDecimalCount;
            }
            $scope.bowlingRuns += id;
            $scope.totalBls++;
            $scope.runs += id;
            if (id == 4) {
                consecutiveDotBallsCount = 0;
                $scope.fours++;
            }
            else if (id == 6) {
                consecutiveDotBallsCount = 0;
                $scope.sixers++;
            }
            else if (id == 0) {
                consecutiveDotBallsCount++;
                if (consecutiveDotBallsCount == 6) {
                    $scope.maidens++;
                    consecutiveDotBallsCount = 0;
                }
            }
            else if (id == 1 || id == 2 || id == 3 || id == 5) {
                consecutiveDotBallsCount = 0;
            }
        }
        else if (id == "Wicket") {
            $scope.wickets++;
        }
    }
});