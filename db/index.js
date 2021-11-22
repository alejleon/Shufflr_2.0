const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost27017/Shufflr', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connected to Shufflr on port: 27017')
});

const Schema = mongoose.Schema;

//Schema
var userCollectionSchema = new Schema({
  username: String,
  user_id: Number,
  releases: [
    {
      id: Number,
      instance_id: Number,
      date_added: Date,
      rating: Number:
      basic_information: {
        id: Number,
        master_id: Number,
        master_url: String,
        resource_url: String,
        thumb: String,
        cover_image: String,
        title: String,
        year: Number,
        formats: [
          {
            name: String,
            qty: Number,
            text: String,
            description: [String]
          }
        ],
        labels: [
          {
            name: String,
            catno: String,
            id: Number
          }
        ],
        artists: [
          {
            name: String,
            id: Number
          }
        ],
        genres: [String],
        styles: [String]
      }
    }
  ]
});

//Models
const UserCollection = mongoose.model('UserCollection', userCollectionSchema);

//Queries
const insertCollection = (username, releases, callback) => {
  UserCollection.create({
    username: username,
    releases: releases
  }, (err, response) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, response)
    }
  })
}

const getCollection = (username, callback) => {
  UserCollectionfind({
    username: username
  }, (err, collection) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, collection)
    }
  })
}

module.exports = {
  insertCollection,
  getCollection
}