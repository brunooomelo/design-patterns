const { MainLogistic, SeaLogistic, RoadLogistic } = require("./index")

const makeMessage = (transport, product) => `The ${product} is being delivered by ${transport}`

describe('MainLogistic', () => {
  it('should implement interface createTransport', () => {
    expect(MainLogistic().createTransport).toBeInstanceOf(Function)
  })
  it('should return a logistic correctly to the product', () => {
    expect(MainLogistic().createTransport('sea', 'TV sentoshiba').deliver).toBeInstanceOf(Function)
  })
  it('should return a message when send a product', () => {
    const delivery = MainLogistic().createTransport('sea', 'Cama King')

    expect(delivery.deliver()).toBe(makeMessage('sea', 'Cama King'))
  })
})

describe('RoadLogistic', () => {
  it('should implement interface deliver', () => {
    expect(RoadLogistic().deliver).toBeInstanceOf(Function)
  })
  it('should return a message when pass product in deliver', () => {
    expect(RoadLogistic('Iphone XS').deliver()).toBe('The Iphone XS is being delivered by road')
  })
  it('should return a product generics when no provided' , () => {
    expect(RoadLogistic().deliver()).toBe(makeMessage('road', 'Unknown product'))
  })
})

describe('SeaLogistic', () => {
  it('should implement interface deliver', () => {
    expect(SeaLogistic().deliver).toBeInstanceOf(Function)
  })
  it('should return a message when pass product in deliver', () => {
    expect(SeaLogistic('Container meat').deliver()).toBe('The Container meat is being delivered by sea')
  })
  it('should return a product generics when no provided' , () => {
    expect(SeaLogistic().deliver()).toBe(makeMessage('sea', 'Unknown product'))
  })
})