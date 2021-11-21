const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost27017/Shufflr', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connected to Shufflr on port: 27017')
});

const Schema = mongoose.Schema;

