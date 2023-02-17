const express = require('express');
const app = express();
const herbs = require('./models/herbs.js');

console.log(herbs);

app.get('herbs', (req, res) => {
	res.send(herbs);
});

// SHOW ROUTE

app.get('/herbs/:indexOfHerbsArray', (req, res) => {
	res.render('show.ejs', {
		herbs: herbs[req.params.indexOfHerbsArray],
	});
});

app.get('/herbs', (request, response) => {
	response.render('index.ejs', {
		allHerbs: herbs,
	});
});

app.listen(3000, () => {
	console.log('Server is listening!!!');
});
