const express = require('express');
const app = express();

const herbs = [
    {
    name:'borage',
    otherNames: ['starflower','bee bush','bee bread','bugloss'],
    partsUsed: ['flower','leaves']
    }, 
    {
    name: 'rose',
    otherNames: ['wild rose','hipberry'],
    partsUsed: ['petals','hips']}
];

app.get('herbs', (req, res) => {
	res.send(herbs);
});


// SHOW ROUTE

app.get('/herbs/:indexOfHerbsArray', (req, res) => {
	res.send(herbs[req.params.indexOfHerbsArray]);
});
















app.listen(3000, () => {
	console.log('Server is listening!!!');
});