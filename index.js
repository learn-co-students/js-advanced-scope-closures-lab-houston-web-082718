const produceDrivingRange = function (n) {
  return function (x, y) {
    console.log(n)
    console.log(parseInt(x), parseInt(y));
    if (Math.abs(parseInt(y) - parseInt(x)) >= n) {
      return `${(Math.abs(parseInt(y) - parseInt(x))) - n} blocks out of range`;
    } else {
      return `within range by ${Math.abs((Math.abs(parseInt(y) - parseInt(x))) - n)}`
    }
  }
};

function produceTipCalculator(percent) {
  return function (x) {
    return x * percent;
  }
}

id = 0;

function createDriver() {
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id;
    }
  }
}
