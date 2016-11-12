const mongoose = require('mongoose');
const db = require('../config/db');
const Bakery = require('../models/bakery');

mongoose.connect(db.uri);

Bakery.collection.drop();

Bakery.create([{
  name: 'Rinkoff',
  location: 'Whitechapel',
  openedDate: '1911-08-17',
  pasteryImage: 'http://www.rinkoffbakery.co.uk/wp-content/uploads/2016/09/RINKOFFS_DAY_1-264.jpg'
},{
  name: 'Konditor and Cook',
  location: 'Waterloo',
  openedDate: '1993-06-01',
  pasteryImage: 'http://i.telegraph.co.uk/multimedia/archive/02890/konditorcurlywhirl_2890485b.jpg'
}], (err, bakeries) => {
  if(err) console.log('There was an error creating bakery', err);

  console.log(`${bakeries.length} bakeries created!`);
  mongoose.connection.close();
});
