function determineTime (durations) {
    let hours = 0;
    let mins = 0;
    let secs = 0;
    durations = durations.map(el=>el.split(':'))
    for (let el of durations) {
        hours += +el[0];
        mins += +el[1]
        secs += +el[2]
    }
    return hours + mins/60 + secs/60 <= 24;
}
