import express from 'express';

const PORT: number = 5000;
const app: express.Application = express();

app.set('port', process.env.PORT || PORT);

app.get('/', (req, res) => {
  res.send('Hello world')
})

export default app;
