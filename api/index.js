import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({ title: 'Hello world' });
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Api is running on port ${port}`);
});
