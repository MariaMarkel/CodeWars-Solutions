function iTri(s){
    let totalDistance = 140.60;
    let distanceLeft = (totalDistance-s).toFixed(2);

    let obj = {
        "zero": 'Starting Line... Good Luck!',
        "swim": {'Swim': `${distanceLeft} to go!` },
        "bike": {'Bike': `${distanceLeft} to go!` },
        "runMore10Miles": {'Run': `${distanceLeft} to go!`},
        "runLess10Miles": {'Run': 'Nearly there!'},
        "completed": "You're done! Stop running!"
    }

    if (s===0) {
        return obj.zero;
    } else if (s > 0 && s <= 2.40) {
        return obj.swim;
    } else if (s >= 2.50 && s <= 114.30) {
        return obj.bike;
    } else if (s >= 114.40 && s <= 130.50) {
        return obj.runMore10Miles;
    } else if (s >= 130.60 && s <= 140.50) {
        return obj.runLess10Miles;
    } else if (s >= 140.60) {
        return obj.completed;
    }
}

// function iTri(dist){
//     let totalDist = 2.4 + 112 + 26.2;
//     if (dist === 0) return 'Starting Line... Good Luck!';
//     if (dist <= 2.4) return {'Swim': `${(totalDist - dist).toFixed(2)} to go!`};
//     if (dist <= 114.4) return {'Bike': `${(totalDist - dist).toFixed(2)} to go!`};
//     if (dist <= 127) return {'Run': `${(totalDist - dist).toFixed(2)} to go!`};
//     if (dist < totalDist) return {'Run': `Nearly there!`};
//     return "You're done! Stop running!";
// }
