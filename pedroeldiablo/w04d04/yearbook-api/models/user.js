const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
name: {type: String, trim:true, required: true},
github: {type: String, trim:true, unique:true},
image: {type: String, trim:true},
bio: {type: String, trim:true},
portfolio: {type: String, trim:true},
project_titles: Array
});

module.exports = mongoose.model('User', userSchema);
