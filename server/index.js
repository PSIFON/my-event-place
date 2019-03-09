import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(3000 || process.env.PORT, () => {
  console.log(`App listening on PORT ${3000 || process.env.PORT}`)
});

