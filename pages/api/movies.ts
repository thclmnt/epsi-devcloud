import type { NextApiRequest, NextApiResponse } from 'next';
import { sendOk } from '../../lib/responseUtils';
import { getAllMovies, createMovie } from '../../lib/movieUtils';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/movies:
 *   get:
 *     tags:
 *      - Movies
 *     description: Returns all movies
 *     responses:
 *       200:
 *         description: All movies returned successfully
 *   post:
 *     tags:
 *      - Movies
 *     description: Create a new movie
 *     responses:
 *       200:
 *         description: Movie created successfully
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<NextResponse> {
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
	return NextResponse.next();
}
