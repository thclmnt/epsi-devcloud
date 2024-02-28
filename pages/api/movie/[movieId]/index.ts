import type { NextApiRequest, NextApiResponse } from 'next';
import {
	deleteMovieById,
	getMovieById,
	updateMovieById,
} from '../../../../lib/movieUtils';
import { sendOk } from '../../../../lib/responseUtils';

/**
 * @swagger
 * /api/movie/{id}:
 *   get:
 *     tags:
 *      - Movies
 *     description: Returns a movie by id
 *     responses:
 *       200:
 *         description: Movie returned successfully
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *   put:
 *     tags:
 *      - Movies
 *     description: Update a movie by id
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *   delete:
 *     tags:
 *      - Movies
 *     description: Delete a movie by id
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 */
export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { movieId } = req.query;
	if (!movieId) {
		return;
	}
	const id = movieId as string;
	switch (req.method) {
		case 'GET':
			const movie = await getMovieById(id);
			sendOk(res, movie);
			break;
		case 'PUT':
		case 'PATCH':
			const data = req.body;
			const newMovie = await updateMovieById(id, data);
			sendOk(res, newMovie);
			break;
		case 'DELETE':
			await deleteMovieById(id);
			sendOk(res);
		default:
			break;
	}
}
