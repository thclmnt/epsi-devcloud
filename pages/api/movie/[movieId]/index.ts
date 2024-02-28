import type { NextApiRequest, NextApiResponse } from 'next';
import {
	deleteMovieById,
	getMovieById,
	updateMovieById,
} from '../../../../lib/movieUtils';
import { sendOk } from '../../../../lib/responseUtils';

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
