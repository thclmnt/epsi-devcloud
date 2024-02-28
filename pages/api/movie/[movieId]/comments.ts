import type { NextApiRequest, NextApiResponse } from 'next';
import { sendOk } from '../../../../lib/responseUtils';
import {
	addCommentToMovie,
	getAllCommentsFromMovieId,
} from '../../../../lib/commentsUtils';

/**
 * @swagger
 * /api/movie/{movieId}/comments:
 *   get:
 *     tags:
 *      - Comments
 *     description: Returns all comments for a movie by id
 *     responses:
 *       200:
 *         description: All comments returned successfully
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *   post:
 *     tags:
 *      - Comments
 *     description: Create a new comment for a movie by id
 *     responses:
 *       200:
 *         description: Comment created successfully
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { movieId } = req.query;
	if (!movieId) {
		return;
	}
	const id = movieId as string;

	switch (req.method) {
		case 'GET':
			const comments = await getAllCommentsFromMovieId(id);
			sendOk(res, comments);
			break;
		case 'POST':
			const data = req.body;
			const newComment = await addCommentToMovie(id, data);
			sendOk(res, newComment);
		default:
			break;
	}
}
