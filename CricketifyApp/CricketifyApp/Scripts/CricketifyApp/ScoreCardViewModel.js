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

    return battingTeam;
}
