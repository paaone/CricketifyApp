var oversCount = 0;
var oversDecimalCount = 0.0;

var totalBalls = 0;
var totalRuns = 0;
var DotBallsCount = 0;
var maidens = 0;
var fours = 0;
var sixes = 0;
var wickets = 0;

function displayOvers(balls) {
    if (balls > 0) {
        overs = Math.floor(totalBalls / 6);
        balls = (totalBalls % 6);
    }
    if (balls == 0) {
        endOfOver();
    }
    return overs + "." + balls;
}

function endOfOver() {
    if (DotBallsCount == 6) {
        maidens++;
    }
    DotBallsCount = 0;

    // switch bowlers
    // rotate strike
}

function updateBatsmanStats(batsman, action) {
    if (isNaN(action)) { // It is either a wicket or an extra
        if (action = "W") {
            batsman.status = "OUT";
            batsman.ballsPlayed++;
        }
    }
    else {
        if (action == 4) {
            batsman.fours++;
        }
        if (action == 6) {
            batsman.sixes++;
        }

        batsman.Runs = batsman.Runs + action;
        batsman.ballsPlayed++;
    }

    batsman.SR = strikeRate(batsman.Runs, batsman.ballsPlayed);
}

function rotateStrike(batsmanOnStrike, batsmanNonStrike, action){
    if (action == 1 || action == 3 || action == 5) {
        batsmanOnStrike.status = "non-strike";
        batsmanNonStrike.status = "on-strike";
    }
}

function updateStats(action, balls) {

    if (isNaN(action)) { // It is either a wicket or an extra
        if (action = "W") {

            wickets++;
        }
    }
    else {
        if (action == 0) {
            DotBallsCount++;
        }
        if (action == 4) {
            fours++;
        }
        if (action == 6) {
            sixes++;
        }

        totalRuns = totalRuns + action;
    }
}


function strikeRate(runs, balls) {
    return balls == 0 ? 0 : (runs / balls * 100).toFixed(2);
}

function economyRate(runs, balls) {
    return balls = 0 ? 0 : (runs / balls * 6).toFixed(2);
}


var app = angular.module('myApp', []);
app.controller('ScorecardController', function ($scope) {
    $scope.actionPerBall = [{ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, wicket: "W", extra: "Extras" }];

    $scope.battingTeam = [{
        TeamName: "Spades",
        Players: [{
            Name: "Sai Prashant",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "on-strike"
        },
        {
            Name: "Pavan Samprati",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "non-strike"
        },
            {
                Name: "Sandeep N",
                Runs: 0,
                ballsPlayed: 0,
                fours: 0,
                sixes: 0,
                SR: 0.0,
                status: "DNB"
            }
        ]
    }];

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

        updateStats(id, totalBalls);
        $scope.runs = totalRuns;
        $scope.overs = displayOvers(totalBalls);
        $scope.economyRate = economyRate($scope.runs, totalBalls);
        $scope.strikeRate = strikeRate($scope.runs, totalBalls)
        $scope.maidens = maidens;
        $scope.wickets = wickets;
        $scope.sixers = sixes;
        $scope.fours = fours;

        var batsmanOnStrike = $scope.battingTeam[0].Players.filter(function (obj) {
            return obj.status == "on-strike";
        })

        var batsmanNonStrike = $scope.battingTeam[0].Players.filter(function (obj) {
            return obj.status == "non-strike";
        })

        updateBatsmanStats(batsmanOnStrike[0], id);
        rotateStrike(batsmanOnStrike[0], batsmanNonStrike[0], id);


    }

});