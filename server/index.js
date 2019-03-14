import express from 'express';

const app = express();

// app.use(express.static('public'));

app.get('/', (request, response) => {
	return response.status(200).json('Welcome to Your event place')
})

if (process.env.NODE_ENV !== 'test') {
	app.listen(3000 || process.env.PORT, () => {
		console.log(`App listening on PORT ${3000 || process.env.PORT}`)
	});
}

export default app;

