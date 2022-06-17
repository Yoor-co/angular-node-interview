const express = require('express');
const app = express();
const port = 3010;
const routes = require('./router');
const cors = require('cors');

app.use(express.static('static'));

app.use(cors());
app.use('/', routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
