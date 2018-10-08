const produceDrivingRange = function(blockRange) {
  console.log(blockRange)
  return function (currentLocation, destination) {
    let start = currentLocation.slice(0, currentLocation.length-2)
    let end = destination.slice(0, destination.length-2)
    console.log(start)
    console.log(end)
    if (end-start === 0) {
      return `Within exact range`
    } else if (end-blockRange < start) {
      return `within range by ${end-start}`
    } else {
      return `${end-blockRange-start} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percentage) {
  return function(cost) {
    return percentage * cost
  }
}

const createDriver = function() {
  let driverId = 0
    return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
