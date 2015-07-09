var oversCount = 0;
var oversDecimalCount = 0.0;

var totalBalls = 0;
var totalRuns = 0;
var DotBallsCount = 0;
var maidens = 0;
var fours = 0;
var sixes = 0;
var wickets = 0;


var app = angular.module('myApp', []);
app.controller('ScorecardController', function ($scope) {
    $scope.actionPerBall = [{ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, wicket: "W", extra: "Extras" }];

    $scope.battingTeam = getBattingTeam("Spades");

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
    $scope.economyRate = 0;
    $scope.strikeRate = 0;

    $scope.handleScorecardClick = function (id) {
        if (id != "Extras") {
            totalBalls++;
        }

        var batsmanOnStrike = $scope.battingTeam[0].Players.filter(function (obj) {
            return obj.status == "on-strike";
        })

        var batsmanNonStrike = $scope.battingTeam[0].Players.filter(function (obj) {
            return obj.status == "non-strike";
        })

        if (id == "W") {
            var nextBatsman = $scope.battingTeam[0].Players.filter(function (obj) {
                return obj.status == "DNB";
            })
            fallOfWicket(batsmanOnStrike[0], nextBatsman[0]);
        }

        updateStats(id, totalBalls);
        $scope.runs = totalRuns;
        $scope.overs = displayOvers(totalBalls);
        $scope.totalBls = totalBalls;
        $scope.economyRate = economyRate($scope.runs, totalBalls);
        $scope.strikeRate = strikeRate($scope.runs, totalBalls)
        $scope.maidens = maidens;
        $scope.wickets = wickets;
        $scope.sixers = sixes;
        $scope.fours = fours;


        updateBatsmanStats(batsmanOnStrike[0], id);
        rotateStrike(batsmanOnStrike[0], batsmanNonStrike[0], id);


    }

});