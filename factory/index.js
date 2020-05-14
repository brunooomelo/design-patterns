function RoadLogistic(product = 'Unknown product') {
  return {
    deliver: function() {
      return `The ${product} is being delivered by road`
    }
  }
}

function SeaLogistic(product = 'Unknown product') {
  return {
    deliver: function() {
      return `The ${product} is being delivered by sea`
    }
  }
}

function MainLogistic() {
  const createTransport = (type, product) => {
    const supportTransport = {
      road: RoadLogistic,
      sea: SeaLogistic
    }
    return supportTransport[type](product)
  }

  return {
    createTransport
  }
}


module.exports = {
  MainLogistic,
  SeaLogistic,
  RoadLogistic
}