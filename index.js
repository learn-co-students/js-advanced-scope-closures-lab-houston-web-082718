function produceDrivingRange(blocks) {
    return function(block1, block2) {
        let b1 = parseInt(block1);
        let b2 = parseInt(block2);
        let diff = Math.abs(b1 - b2);
        return diff <= blocks ? `within range by ${blocks - diff}` : `${diff - blocks} blocks out of range`;
    }
}

function produceTipCalculator(percent) {
    return function(fare) {
        return fare * percent;
    }
}

function createDriver() {
    let driverID = 1;
    return class {
        constructor(name) {
            this.name = name;
            this.id = driverID++;
        }
    }
}