import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/movies';
import { NextApiRequest, NextApiResponse } from 'next';

describe('/api/users', () => {
	test('returns a list of users', async () => {
		const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
			method: 'GET',
		});

		const response = await handler(req, res);

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual([{}]);
	});
});
