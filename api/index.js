import express from 'express';
import registrationService from './services/registration.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/registration', (req, res) => {
	try {
		const result = registrationService.register(req.body);
		if ('error' in result) {
			res.status(400).send({ error: result.message })
			return;
		}

		res.send(result);
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

app.listen(port, () => {
    console.log(`mb-api is running on port ${port}`);
});
