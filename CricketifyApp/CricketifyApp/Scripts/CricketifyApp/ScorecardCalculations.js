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
        //if (action = "W") {
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

function fallOfWicket(batsman, nextBatsman) {
    batsman.status = "OUT";
    batsman.ballsPlayed++;
    nextBatsman.status = "on-strike";
}


function rotateStrike(batsmanOnStrike, batsmanNonStrike, action) {
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
