import request from 'supertest';
import app from '../server/index';

describe('Testing the index route', () => {
	beforeAll(()=>{
		app.listen(3001)
	})

	afterAll(()=>{
		app.close();
	})
	it('should return a status code of 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
	})

	it('should return json data', async () => {
		const response = await request(app).get('/');
		expect(response.body).toBe('Welcome to Your event place');
	})
});
