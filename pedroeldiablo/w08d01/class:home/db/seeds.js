const mongoose = require('mongoose');
const db = require('../config/db');
const Film = require('../models/film');

mongoose.connect(db.uri);

Film.collection.drop();

Film.create([{
  title: 'RoboCop',
  director: 'Paul Verhoeven',
  releaseDate: '1987-08-17',
  posterImage: 'https://i.kinja-img.com/gawker-media/image/upload/s--GEVqHVmM--/c_fit,fl_progressive,q_80,w_636/19fvytfqqvoy1jpg.jpg'
},{
  title: 'Bridesmaids',
  director: 'Paul Feig',
  releaseDate: '2011-06-24',
  posterImage: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
}], (err, films) => {
  if(err) console.log('There was an error creating films', err);

  console.log(`${films.length} films created!`);
  mongoose.connection.close();
});