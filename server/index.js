const express = require('express');

const quoteCards = require('./game/quoteCards');

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send('Stay fit everyone') )
    .get('/Heart', (req, res) => res.send(quoteCards) );



app.listen(port, () => console.log(`Listening at http://localhost:${port}`));