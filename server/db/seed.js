var Item = require('./models/Item');

Item.findOrCreate({
  where: {
    type: 'Blue',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/blue/front.png',
    cost: 5
  }
});

Item.findOrCreate({
  where: {
    type: 'Green',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/green/front.png',
    cost: 10
  }
});

Item.findOrCreate({
  where: {
    type: 'Orange',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/orange/front.png',
    cost: 15
  }
});

Item.findOrCreate({
  where: {
    type: 'Pink',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/pink/front.png',
    cost: 20
  }
});

Item.findOrCreate({
  where: {
    type: 'Red',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/red/front.png',
    cost: 25
  }
});

Item.findOrCreate({
  where: {
    type: 'Yellow',
    image: 'https://dl.dropboxusercontent.com/u/43628283/shirts/yellow/front.png',
    cost: 30
  }
});
