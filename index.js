// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street-42)
};

function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street)
    return blocks * 264
};

function distanceTravelledInFeet(street, street1) {
    const blocks = Math.abs(street - street1)
    return blocks * 264
};

function calculatesFarePrice(street, street1) {
    const feetTravelled = distanceTravelledInFeet(street, street1)
    if (feetTravelled <= 400) {
        return 0
    }
    if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02
    }
    if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25
    }
    if (feetTravelled > 2500) {
        return 'cannot travel that far'
    }
};
