function duckDuckGoose(players, goose) {
    for (let el in players) {
        return goose%players.length > 0 ? players[goose%players.length-1].name : players[players.length-1].name;
    }
}

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
}
