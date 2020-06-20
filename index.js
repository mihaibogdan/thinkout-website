const path = require('path');
const express = require('express');
var compression = require('compression');
const app = express();
const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 80;

app.use(compression());
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => {
  console.log('Server is up!');
});
