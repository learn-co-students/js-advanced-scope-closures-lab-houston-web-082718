function produceDrivingRange(range) {
  return function (block1, block2) {
    let b1 = parseInt(block1)
    let b2 = parseInt(block2)
    return ((b2 - b1) < range) ? `within range by ${range - (b2 - b1)}` : `${(b2 - b1) - range} blocks out of range`
  }
}

function produceTipCalculator (percent) {
  return function (fare) {
    return fare * percent
  }
}

function createDriver() {
  classID = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = classID++
    }
  }
}