function getBattingTeam(teamId) {

    // eventually this will be a call to the server which will return the batting team. 
    battingTeam = [{
        TeamName: "Spades",
        Players: [{
            Name: "Sai Prashant",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "on-strike",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Pavan Samprati",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "non-strike",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Vijay Raghavan",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Partheeban K",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Deepak Dayanad",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Prasad GS",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Ramanan Shekar",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Ajay Raghav",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Sandeep N",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Sai Prasad B",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        },
        {
            Name: "Dipak Patel",
            Runs: 0,
            ballsPlayed: 0,
            fours: 0,
            sixes: 0,
            SR: 0.0,
            status: "DNB",
            modeOfDismissal: "",
            bowledby: "",
            caughtby: ""
        }]
    }];

    return battingTeam;
}

function getBowlers(teamId) {

    // eventually this will be a call to the server which will return the bowling options. 
    bowlingOptions = [{
        TeamName: "Spades",
        Players: [{
            Name: "Sai Prashant",
            Overs: 0,
            Maidens: 0,
            totalRuns: 0,
            wickets: 0,
            EconomyRate: 0.0,
            ballsBowled: 0,
            bowlingStatus: "current-bowler"
        },
        {
            Name: "Sandeep N",
            Overs: 0,
            Maidens: 0,
            totalRuns: 0,
            wickets: 0,
            EconomyRate: 0.0,
            ballsBowled: 0,
            bowlingStatus: "bowler"
        }]
    }];
    return bowlingOptions;
}
