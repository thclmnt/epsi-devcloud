import type { NextApiRequest, NextApiResponse } from 'next';
import { sendOk } from '../../lib/responseUtils';
import { getAllMovies, createMovie } from '../../lib/movieUtils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'POST':
			const data = req.body;
			const newMovie = await createMovie(data);
			sendOk(res, newMovie);
			break;
		case 'GET':
			const movies = await getAllMovies();
			sendOk(res, movies);
			break;
		default:
			break;
	}
}
