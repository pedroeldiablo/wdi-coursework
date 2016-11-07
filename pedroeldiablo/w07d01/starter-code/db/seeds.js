const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/referenced-yearbook');

const User = require('../models/user');
User.collection.drop();

User.create([{
  name: 'Mike Hayden',
  email: 'mike@ga.co',
  github: 'mickyginger'
},{
  name: 'Will Cook',
  email: 'will@ga.co',
  github: 'willcook4'
},{
  name: 'Matt Calthrop',
  email: 'matt@ga.co',
  github: 'mattcalthrop'
},{
  name: 'Emily Isacke',
  email: 'emily@ga.co',
  github: 'eisacke'
}], (err, users) => {
  if (err) return console.log(err);
  console.log('Users added:', users);
  mongoose.connection.close();
});
