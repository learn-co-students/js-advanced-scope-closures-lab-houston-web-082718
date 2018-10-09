//produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. 
function produceDrivingRange(range) {
    return function(block1, block2) {
        const num1 = parseInt(block1.slice(0, block1.length - 2))
        const num2 = parseInt(block2.slice(0, block2.length - 2))
        const blocks = Math.abs(num1 - num2)
        return blocks < range ? `within range by ${range - blocks}` : `${blocks - range} blocks out of range` ;
    }
}

//produceTipCalculator() - Returns a function that then calculates a tip.
function produceTipCalculator(percentage) {
    return function(fare) {
        return fare * percentage;
    }
}

//createDriver is a function that returns a Driver class. The class has reference to a driverId 
//that is incremented each time a new driver is created.
function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}