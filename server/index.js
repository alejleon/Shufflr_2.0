const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

app.use('/', express.static(path.join(__dirname, '../public/')));
app.use(logger('dev'));
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'hello from server' });
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});