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
    $scope.bowlingOptions = getBowlers("Spades");

    $scope.handleScorecardClick = function (id) {
        if (id != "Extras") {
            totalBalls++;
        }

        var currentBowler = $scope.bowlingOptions[0].Players.filter(function (obj) {
            return obj.bowlingStatus == "current-bowler";
        })

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
            fallOfWicket(batsmanOnStrike[0], nextBatsman[0], currentBowler[0]);
        }

        updateBatsmanStats(batsmanOnStrike[0], id);
        updateBowlerStats(currentBowler[0], id);
        rotateStrike(batsmanOnStrike[0], batsmanNonStrike[0], id);
        updateStats(id, totalBalls);

        if (id != "Extras" && totalBalls % 6 == 0) {
            batsmanOnStrike = $scope.battingTeam[0].Players.filter(function (obj) {
                return obj.status == "on-strike";
            })
            batsmanNonStrike = $scope.battingTeam[0].Players.filter(function (obj) {
                return obj.status == "non-strike";
            })
            currentBowler = $scope.bowlingOptions[0].Players.filter(function (obj) {
                return obj.bowlingStatus == "current-bowler";
            })
            nextBowler = $scope.bowlingOptions[0].Players.filter(function (obj) {
                return obj.bowlingStatus == "bowler";
            })
            endOfOver(batsmanOnStrike[0], batsmanNonStrike[0], currentBowler[0], nextBowler[0]);
        }

        $scope.runs = totalRuns;
        $scope.overs = displayOvers(totalBalls);
        $scope.totalBls = totalBalls;
        $scope.economyRate = economyRate(totalRuns, totalBalls);
        $scope.runRate = economyRate(totalRuns, totalBalls);
        $scope.strikeRate = strikeRate(totalRuns, totalBalls)
        $scope.maidens = maidens;
        $scope.wickets = wickets;
        $scope.sixers = sixes;
        $scope.fours = fours;

    }

});