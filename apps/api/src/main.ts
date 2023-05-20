import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;

/* Setup server */
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

/* Listen for errors and than log them */
server.on('error', console.error);
