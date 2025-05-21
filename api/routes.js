import express from 'express';

const router = new express.Router();

router.post('/registration', (req, res) => {
	res.send({ text: 'post registration'});
});

export default router;
