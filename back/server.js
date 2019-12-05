const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
	response.send(`Fil d'actualités`);
});

app.get('/jobs', (request, response) => {
	response.send(`Jobs`);
});

app.get('/accomodations', (request, response) => {
	response.send(`Logements`);
});

app.get('/courses', (request, response) => {
	response.send(`Cours`);
});

app.get('/supplies', (request, response) => {
	response.send(`Fournitures scolaire`);
});

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
