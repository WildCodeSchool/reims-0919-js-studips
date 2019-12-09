const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
  response.send(`Fil d'acctualités`);
});

app.get('/jobs', (request, response) => {
  response.send(`jobs`);
});

app.get('/accomodations', (request, response) => {
  response.send(`logements`);
});

app.get('/cours', (request, response) => {
  response.send(`cours`);
});

app.get('/supplies', (request, response) => {
  response.send(`équipement scolaire`);
});

app.listen(port, (err) => {
if (err) {
  throw new Error('Something bad happened...');
}

console.log(`Server is listening on ${port}`);
});
