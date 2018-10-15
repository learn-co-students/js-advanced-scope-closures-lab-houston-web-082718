function produceDrivingRange(blockRange) {
  return function (block1,block2) {
    const range = Math.abs(block1.slice(0,-2) - block2.slice(0,-2));
    if (range > blockRange) {
      return `${range - blockRange} blocks out of range`;
    } else {
      return `within range by ${range}`;
    }
  }
}

const eightBlockRange = produceDrivingRange(8);
const twentyBlockRange = produceDrivingRange(20);

function produceTipCalculator(percentage) {
  return function (amount) {
    return amount * percentage;
  }
}

const tenPercentTip = produceTipCalculator(.10);

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}