import cors from 'cors';
import express from 'express';
import registrationService from './services/registration.js';
import httpStausCode from './utils/httpStausCode.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/registration', (req, res) => {
	try {
		const result = registrationService.register(req.body);
		if (result && 'error' in result) {
			res.status(httpStausCode.UnprocessableContent).send({ message: result.message })
			return;
		}

		res.send(result);
	} catch (error) {
		// Aqui deveria ser algum logger, mas para o desafio vou deixar o console.log mesmo.
		console.log(error);
		res.status(httpStausCode.InternalServerError).send();
	}
});

app.listen(port, () => {
    console.log(`mb-api is running on port ${port}`);
});
