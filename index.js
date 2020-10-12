const express = require('express');
const app = express();

app.use(express.json());

const entries = [
	{
		name: 'Arto Hellas',
		number: '12-45-43434',
		id: 1,
	},
	{
		name: 'Ada Lovelace',
		number: '32-45-124542',
		id: 2,
	},
	{
		name: 'Dan Abramov',
		number: '12-43-234345',
		id: 3,
	},
	{
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
		id: 4,
	},
];

app.get('/api/persons', (_req, res) => {
	res.json(entries);
});

app.get('/info', (_req, res) => {
	res.send(`Phonebook has info for ${entries.length} people. \n\n ${new Date()}`);
});

app.get('/api/persons/:id', (req, res) => {
	const id = req.params.id;
	let person = entries.filter((entry) => entry.id === Number(id));
	res.json(person);
});

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
