function displayOvers(balls) {
    if (balls > 0) {
        overs = Math.floor(totalBalls / 6);
        balls = (totalBalls % 6);
    }
    return overs + "." + balls;
}

function displayBowlerOvers(totalBls) {
    if (totalBls > 0) {
        overs = Math.floor(totalBls / 6);
        balls = (totalBls % 6);
    }
    return overs + "." + balls;
}

function endOfOver(batsmanOnStrike, batsmanNonStrike, currentBowler, nextBowler) {
    if (DotBallsCount == 6) {
        currentBowler.Maidens++;
    }
    DotBallsCount = 0;
    rotateStrike(batsmanOnStrike, batsmanNonStrike, "over");
    changeBowler(currentBowler, nextBowler);
    // switch bowlers
}

function changeBowler(currentBowler, nextBowler) {
    currentBowler.bowlingStatus = "bowler";
    nextBowler.bowlingStatus = "current-bowler";
}

function updateBatsmanStats(batsman, action) {
    if (isNaN(action)) { // It is either a wicket or an extra
        //if (action == "W") {
        //    batsman.status = "OUT";
        //    batsman.ballsPlayed++;
        //}
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

function updateBowlerStats(bowler, action) {
    if (isNaN(action)) { // It is either a wicket or an extra
        //if (action == "W") {
        //    batsman.status = "OUT";
        //    batsman.ballsPlayed++;
        //}
    }
    else {
        bowler.totalRuns = bowler.totalRuns + action;
        bowler.ballsBowled++;
        bowler.Overs = displayBowlerOvers(bowler.ballsBowled);
    }

    bowler.EconomyRate = economyRate(bowler.totalRuns, bowler.ballsBowled);
}

function fallOfWicket(batsman, nextBatsman, currentBowler) {
    batsman.status = "OUT";
    batsman.ballsPlayed++;
    nextBatsman.status = "on-strike";
    currentBowler.wickets++;
}

function rotateStrike(batsmanOnStrike, batsmanNonStrike, action) {
    if (action == 1 || action == 3 || action == 5 || action == "over") {
        batsmanOnStrike.status = "non-strike";
        batsmanNonStrike.status = "on-strike";
    }
}

function updateStats(action, balls) {

    if (isNaN(action)) { // It is either a wicket or an extra
        if (action == "W") {
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
